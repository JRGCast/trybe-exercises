# Liskov Substitution Principle
# Lembra dos princípios S.O.L.I.D.? Este é o L, o Princípio de Substituição de Liskov . Vamos botar a mão na massa com um exemplo bem robusto; são nestes exemplos que a organização vale mais a pena! Bora?
# Suponha que o seu time de desenvolvimento está trabalhando em um software que controla os acessos à API do seu serviço. Você está responsável por manter um código cujo dever é gerar uma token de acesso, que o front utilizará para validar todas as requisições que receber de clientes.
# Sua empresa cobra clientes por número de requisições, então você precisará registrar em um banco a quantidade de vezes que uma determinada token foi utilizada para acessar o serviço. Porém, o seu time considerou os seguintes fatos:
# Nossa infra-estrutura utiliza um servidor SQL, cuja inserção tende a ser mais lenta.
# É normal que clientes acessem o serviço milhares de vezes em um intervalo de 30 minutos, e depois fiquem vários dias sem utilizar.
# Então vocês decidiram guardar as contagens de requisições em um banco de dados cache , que fica armazenado por inteiro na memória RAM de uma máquina! Por estar nessa memória, ele é super rápido mas não pode ser muito grande. Decide-se que o valor é armazenado no banco em cache e, após o valor ficar uma hora inteira sem ser atualizado, ele é enviado para o banco SQL.
# Sua colega Bia hoje trabalha no serviço, e utiliza a seguinte classe para acessar o banco de dados SQL:

import pysql  # Encare essa lib como fictícia!

class SqlConnector:
    # ...

    def __init__(self, address, port):
        print(f'criada uma conexão em {address}:{port}')
        self.db = pysql.connect(address, port)

    def get_count(token):
        query = f'SELECT count FROM access WHERE token={token};--'

    def count_request(token):
        query = f'UPDATE access SET count = count+=1 WHERE token={token};--'
        self.db.execute(query)

# Nosso dever é implementar o acesso ao Redis, nosso banco de dados cache , e oferecer à Bia uma interface amigável e fácil de utilizar. Ou seja, funções que ela possa chamar em seu código de forma simples.
# (Redis é um banco de dados em memória, que utiliza uma estrutura chave-valor. Saiba mais indo nos recursos adicionais!)
# Assim, criamos a seguinte classe, implementando a lógica de cache:

import pyredis  # Encare essa lib como fictícia também!

class RedisConnector:
    def __init__(self, address, port):
        print(f'criada uma conexão em {address}:{port}')
        self.db = pyredis.connect(address, port)

    def get_count(token):
        result = self.search(token)
        amount = result.get("access_count", None)
        return amount

    def update_count(token):
        amount = self.get_count()
        if amount is None:
            self.db.insert({token:1})
        else:
            self.db.insert({token: amount+1})

# Porém, ao analizar este código a nossa colega Bia não gostou! Ela disse:
# Mas aí vamos ter que refatorar muita coisa! Eu uso o conector SQL em muitos lugares, e preciso ser capaz de usar o conector Redis em todos eles! Se o nome das funções mudarem eu vou ter que refatorar o código inteiro! E se pudéssemos chamar os dois conectores da mesma forma, nos mesmos lugares? Isso facilitaria demais.
# Com este feedback, refatoramos as classes conectoras. Vamos criar uma classe Connector, que abstrai os métodos que devemos utilizar numa interface , e os dois conectores serão herdeiros desta classe. Veja:

from abc import ABC, abstractmethod

class Connector(ABC):
    @abstractmethod
    def get_count(token):
        pass

    @abstractmethod
    def count_request():
        pass

class RedisConnector(Connector):
    def __init__(self, address, port):
        # A lógica da conexão ao banco Redis
        pass

    def get_count(token):
        # A lógica de acesso ao banco Redis
        pass

    def count_request(token):
        # A lógica de acesso ao banco Redis
       pass

class SqlConnector(Connector):
    def __init__(self, address, port):
        # A lógica da conexão ao banco SQL
        pass

    def get_count(token):
        # A lógica de acesso ao banco SQL
        pass

    def count_request(token):
        # A lógica de acesso ao banco SQL
        pass

# Agora, uma classe que precisar acessar o banco pode receber como Connector tanto uma classe quanto a outra! Veja um exemplo de uso:

import analyzer

# o parâmetro database é um connector
def analyze_data(token, database, data):
    try:
        report = analyzer.complete_report(data)
        database.count_request(token)  # Cliente receberá cobrança
        return report

    # Se a database não tiver o método count_request, vai lançar o erro
    # AttributeError -- e a gente deixa o programa travar se isso acontecer.
    except analyzer.InvalidDataException:
        # A gente lida apenas com InvalidDataException, que é um erro
        # esperado quando o relatório não estiver pronto.
        return  # Cliente não receberá cobrança, pois não geramos o relatório

# Note que, dentro deste código, não conseguimos distinguir qual conector estamos usando. Tudo o que nos interessa aqui é que ela tem um método count_request() que recebe a token de acesso. Assim, se estivermos trabalhando nesta parte da aplicação, podemos ter certeza de a inserção em banco foi feita, sem nos preocuparmos com a lógica de cache que está acontecendo por trás. Nossa colega Bia conseguirá trabalhar de forma muito mais eficiente.
# 🎉 Acabamos de utilizar o L da arquitetura SOLID!
# L iskov substitution principle ( Princípio de substituição de Liskov ): objetos em um programa devem ser substituíveis por outros de suas classes herdeiras, sem que isso quebre nada. Isso significa que, para a substituição ser possível, os subtipos devem seguir a interface de um tipo base;
# Ou seja, classes herdeiras devem sempre respeitar a interface de suas classes ascendentes! Elas podem especializar comportamentos, mas nunca removê-los! Caso contrário seu código fica cada vez mais difícil de usar, reusar e entender o que se faz! Agora, a Bia continuará fazendo suas chamadas da mesma forma, sem refatorar seu código. Esta é a parte legal da orientação a objetos bem feita!
# E não precisamos, lembrem, escrever um código ruim e depois refatorar (embora, fatalmente, isso vá acontecer às vezes, hehe); se lembrarmos dos princípios S.O.L.I.D. enquanto estivermos decidindo como as classes devem ser, já pulamos muitos desses passos de refatoração e já teremos, de cara, um código muito melhor.
# Porém, nenhum código é perfeito. A abstração e as boas práticas servem para ajudar, mas repito: Não existe bala de prata . O bom senso e a experiência são muito importantes também. No fim, o objetivo é ter um código simples.