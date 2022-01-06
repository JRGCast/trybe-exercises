# Interface Segregation Principle
# O Vini, seu colega, estava recentemente resolvendo o problema do banco de dados SQL estar recebendo acessos demais, causando sobrecarga e crashes. Após explicar este problema, ele explicou a solução:
# Fiz uma réplica do nosso banco de dados. A maioria dos acessos era de leitura, então com esta réplica read-only, poderemos dividir os acessos entre cada um dos dois, evitando a sobrecarga. Aí quando for um acesso de escrita, podemos contar com o meu replicador pra manter os dois bancos iguais.
# Massa. Pra atender essa demanda, o Vini pediu que os trechos do sistema que só precisam ler dados utilizassem conectores que só conseguem ler, evitando confusões. Combinados precisam ser codados, não é?
# Só que nós temos uma interface de conector que implementa operações de leitura e escrita. E agora precisamos de uma interface somente com leitura, sem escrita! Como conseguimos fazer isso?
# Primeiro, devemos considerar a abstração em que trabalhamos ao atender as demandas anteriores. Devemos manter uma boa abstração, para que o nosso codigo continue simples e fácil de manter. Então, nosso objetivo principal é assegurar duas coisas:
# As classes ReadOnlyConnectors devem implementar apenas o método get_count .
# Já as classes que forem FullConnectors devem implementar, pelo menos, get_count e count_request .
# Lembrando dos conceitos de Classes Abstratas, já sabemos como fazer isso! Classes Abstratas e Herança são formas que temos de garantir que as classes herdeiras precisam ter certos comportamentos. Vamos tentar abstrair estes comportamentos.

''' ABC é uma Abstract Base Class. Herdar desta classe indica que estamos fazendo
uma classe abstrata, que neste caso também é uma Interface, pois não contem
implementações, apenas definições de métodos.

Estes metodos DEVEM ser implementados pelas classes herdeiras, por isso
utilizamos o decorator `@abstractmethod`: se estes metodos não forem sobrescritas por
uma implementação da classe herdeira, o Python nos avisará que estamos cometendo um erro.'''

from abc import ABC, abstractmethod

class ReadOnlyConnector(ABC):
    @abstractmethod
    def get_count(self, token):
        pass

# Como FullConnector deve também ser capaz de ler,
# ela é uma classe abstrata que herda de outra classe abstrata!
class FullConnector(ReadOnlyConnector):
    @abstractmethod
    def count_request(self, token):
        pass

## Uma classe abstrata exige a implementação de todos os seus métodos.
## Uma implementação incompleta não poderá ser instanciada!
## class SQLConnector(FullConnector):
##     def count_request(self, token):
##         ...
##
## TypeError: não pode instanciar porque não implementa o método get_count
## sql = SQLConnector() 

# Com estas interfaces, podemos escolher quais características estarão presentes em cada conector que criarmos. Por exemplo:
class ReadOnlySqlConnector(ReadOnlyConnector):
    # ...
  pass

# Este conector SQL terá somente os métodos de leitura, sendo ideal para utilizar com a réplica que o Vini criou.
class RedisConnector(FullConnector):
    # ...
  pass

# Já este conector pode ser usado pela Bia, que precisa anotar os novos acessos!
# Esta divisão de tarefas onde cada interface tem a responsabilidade de representar uma única característica é chamada de Princípio De Segregação de Interfaces , ou em inglês, Interface Segregation Principle. Justamente o I dos nossos princípios S.O.L.I.D.!
# Interfaces, como toda abstração, são "contratos" feitos em código para nós pessoas desenvolvedoras, para que possamos nos organizar melhor. As interfaces garantem que tudo estará organizado, e respeitando estes contratos. Não faça interfaces grandes, faça interfaces pequenas com responsabilidades únicas@
# "Nosso contrato não vale nada se não estiver codado,"
# Vini, citando Clarice Lispector, 2021