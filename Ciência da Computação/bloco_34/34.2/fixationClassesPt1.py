# Herança - Especialização de comportamentos
# Não se deve ter medo de criar objetos. Não importa quão pequenos sejam, é a separação de responsabilidades que faz o paradigma brilhar
# Nós queremos estender nosso código sem modificar o que já existe . Leia o código abaixo! Ele faz a mesma coisa que o código anterior, mas está refatorado. Ele usa, para resolver o nosso problema, os conceitos de classes abstratas, métodos abstratos e o conceito de herança .

from abc import ABC, abstractmethod
import json
import csv


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        """ Aqui colocamos a lógica para a entidade 'se criar',
         ou seja, criar um relatório imprimível. Por simplicidade,
         vamos omitir essa lógica nos exemplos! """
        return [{'Coluna 1': 'Dado 1',
                 'Coluna 2': 'Dado 2',
                 'Coluna 3': 'Dado 3'
                 },
                {
            'Coluna 1': 'Dado A',
            'Coluna 2': 'Dado B',
            'Coluna 3': 'Dado C'
                }]

    @abstractmethod
    def serialize(self):
        # Vamos gerar, aqui, o nosso relatório em formato JSON
        raise NotImplementedError
      
    @abstractmethod
    def get_length(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)


relatorio_de_vendas = SalesReportJSON('meu_relatorio')
relatorio_de_vendas.serialize()

# 💡 Como boa prática, cada classe deve ser definida em seu próprio arquivo! Para nossos exercícios isso não é necessário
# Herança nada mais é do que especializar o comportamento de uma classe. A classe herdeira é tudo que a classe ascendente é e um pouco mais! Pense assim:
# Se FileCompressor é a classe ascendente, ZipFileCompressor e TarFileCompressor são classes herdeiras! Ambas são um tipo específico de compressor de arquivos.
# Se DatabaseConnector é a classe ascendente, MySQLConnector e MongoConnector são as classes hedeiras! Ambas são um tipo específico de conector de banco de dados.
# Se Model é a classe ascendente, UserModel é a classe herdeira! É um tipo específico de model .
# Se Service é a classe ascendente, AuthenticationService é a classe herdeira! É um tipo específico de service .
# 💡 Lembre-se: O Model Service Controller é uma arquitetura que usa como base a Programação Orientada a Objetos!
# A Programação Orientada a Objetos, portanto, te dá o poder de criar classes herdeiras que especializam, mais e mais, o comportamento das classes ascendentes! Não há limite pra quantidade de classes herdeiras que uma classe pode ter, mas é crucial que tais classes sempre sejam uma especialização de comportamento! Já já vamos ver o porquê.

# No Python, definimos uma classe como herdeira da outra na linha que a define, como acima em class SalesReportJSON(SalesReport) . A lógica é: class MinhaClasseHerdeira(ClasseAscendente)
# Exercício de Fixação
# Antes de prosseguirmos para entender o que é aquele @abstractmethod e aquele (ABC) , vamos fixar o entendimento de herança! Implemente uma classe SalesReportCSV que seja herdeira da classe SalesReport , da mesma forma que fizemos com a SalesReportJSON . Para testar seu funcionamento, instancie-a e chame sua função serialize .
# 💡 Lembre-se de tirar sua dúvida conosco se travar em algum momento!


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + '.csv', 'w') as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = csv.DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)

meu_relatorio2 = SalesReportCSV('meu_relatorio2') 
meu_relatorio2.serialize()
# Classes Abstratas
# No exemplo acima vimos, além da herança, outras duas coisas meio confusas! Vimos que a classe ascendente principal parece ser herdeira de outra, uma tal classe ABC . Além disso, a função serialize da classe ascendente está marcada como @abstractmethod e não tem código algum, ao contrário da classe herdeira. O que raios é isso? 🤔
# Serializar é o processo de mudar o formato dos seus dados para que possam ser armazenados ou enviados para serem, depois, convertidos de volta à sua forma original Fonte: Dicionário de Cambridge
# Até agora, sempre criamos uma classe para que pudéssemos criar instancias dela para usarmos, não é mesmo? Pois é! Mas pense no exemplo acima: temos uma classe ascendente "geral", a SalesReport , e uma classe herdeira especifica, a SalesReportJSON . A partir do momento que temos comportamentos gerais e comportamentos especializados, ainda faz sentido usar a classe genérica? . Pensem assim: o Relatório de Vendas precisa, obrigatoriamente, ter um formato. Temos uma classe geral SalesReport que define comportamentos dos relatórios de venda e suas classes herdeiras especializam-na para imprimirem o relatório em diferentes formatos. Nós nunca vamos ter um relatório geral, só um especializado!
# Nesse caso, então, não faz sentido instanciarmos um objeto da classe SalesReport . Quando esse é o caso, dizemos que essa é uma classe abstrata ! Ou seja: classe abstrata é a classe que não pode ser instanciada nunca! E o método abstrato é... a mesma coisa! É um método que nunca pode ser chamado diretamente. A classe SalesReport define o método serialize para deixar nítido que todo relatório de vendas deve ter uma forma de se serializar, mas ela mesma, por ser geral, não é serializável. Assim sendo, a classe SalesReport precisa definir a assinatura do método (nome e parâmetros), mas ele só será chamado sem erros se uma classe herdeira o implementar. No contexto de Programação Orientada a Objetos, pense que coisas abstratas são coisas criadas para serem especializadas por classes herdeiras!
# Exercício de Fixação
# Defina na classe SalesReport um segundo método abstrato chamado get_length que retorna quantos itens tem no relatório. Tente chamar esse método a partir da classe herdeira que não implementa esse método e veja o erro que você recebe. Tente instanciar a SalesReport também! Depois disso, implemente uma lógica qualquer para esse método em uma das classes herdeiras e verifique que já é possível instanciá-la e até chamar o método!
# acrescentado método abstrato get_length à linha 33

# meu_relatorio3 = SalesReport() 
# print(meu_relatorio.get_length())
# Em ambos há o erro: TypeError: Can't instantiate abstract class SalesReportJSON with abstract methods get_length
