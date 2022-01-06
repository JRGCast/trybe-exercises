# Adapter
# Vamos voltar ao nosso trabalho nos conectores! O Beto te trouxe uma demanda nova:
# O problema agora é outro: a ferramenta que compramos tem uma API pronta pra integrar no nosso sistema! Só que a interface é muito diferente da nossa, ela exporta uma lista de cabeçalhos e uma lista de valores, não é como a nossa que já monta os dicionários direitinho...
# Vai dar MUITO trabalho utilizar esta ferramenta, vamos ter que parar tudo para adaptar o nosso sistema a esse formato! Ou pior, vamos ter que REIMPLEMENTAR a api que eles oferecem >:(
# Calma Beto, sem pânico! Podemos solucionar isto. O que podemos fazer?

class ReportAnalyzer:
    def __init__(self, loader):
        self.loader = loader

    def average(self):
        # este é um dos métodos que espera uma lista de dicionários
        data = self.loader.load_data()
        # aqui ela soma o valor na chave final_price em cada item da lista
        total = sum(order['final_price'] for order in data)
        return total / len(data)
    
    ...
# O código acima é o código do nosso sistema, que espera que os loaders retornem uma lista de dicionários. Mas olhem no exemplo abaixo como a ferramenta retorna os dados:

from gerenciator3000 import ReportLoader

loader = ReportLoader()
print(loader.headers)   ##  ['id', 'date', ..., 'final_price']
print(loader.rows[0])  ##  [1337, '2020-11-20', ..., 2350.5]

# Tire um minuto para pensar no que você faria para que o Beto consiga aproveitar os dados e fazer o relatório! A meta é evitar re-escrever o ReportAnalyzer , ou mesmo o gerenciator3000.ReportLoader que a gente nem sabe como funciona!
# pensa, pensa, pensa
# Bom, após muito chá de camomila, nosso time decidiu que faríamos uma classe responsável por "traduzir" estes dados, do formato da ferramenta para o formato do nosso sistema. Esta classe poderá ser acoplada na ferramenta de relatórios.
# Veja o que fizemos:

class G3000LoaderAdapter:
    # aqui o loader é uma instancia do gerenciator3000.ReportLoader!
    def __init__(self, loader):
        self.loader = loader
    
    def load_data(self):

        # o zip junta uma lista de chaves e uma lista de valores 
        # e cria um dicionário! por exemplo: 
        # zip(['nome', 'idade'], ['Capi', 34]) => {'nome': 'Capi', 'idade': 34}
        
        return [zip(loader.headers, row) for row in loader.rows] # tcharans

# Lindo! Acabamos de utilizar outro padrão, chamado Adapter . Ele permite converter a interface de uma classe em outra interface, esperada pelo cliente (isto é, o código que usa a nossa classe). O Adapter permite que interfaces incompatíveis trabalhem em conjunto – o que, de outra forma, seria impossível. Veja só:

from gerenciator3000 import ReportLoader
from project.loaders import G3000LoaderAdapter
from project.analyzer import ReporterAnalyzer

# o loader da ferramenta é carregado do jeito que a ferramenta recomenda
g3000_loader = ReportLoader(...)
# o adaptador recebe o loader da ferramenta.
loader = G3000LoaderAdapter(g3000_loader)
# o analyzer do nosso sistema recebe o adaptador como qualquer outro loader.
analyzer = ReportAnalyzer(loader)

analyzer.average() # JUST WORKS (tm)

# Nossa aplicação aumenta em complexidade como consequência, pois estamos adicionando novas interfaces e classes, porém o desacoplamento entre o código do cliente e o objeto adaptado se mantém. Mudanças no objeto adaptado se refletem apenas no adaptador e não no código cliente, então você não altera nenhuma lógica para adicionar a funcionalidade. É possível substituir o serviço adaptado através da criação de novos adaptadores.
# Classes se comunicam através de troca de mensagens, porém nem sempre isso é possível de se fazer diretamente. Às vezes há uma incompatibilidade entre as classes (tipo uma classe esperar CSV e outra só enviar JSON!), seja por causa de um código legado ou contextos distintos. Em outras palavras, as classes precisam se comunicar, mas é difícil fazê-las "conversarem".
# Imagem de um tênis em uma sacola que está pendurada num varal com pregadores
# O saco adapta a interface do pregador de roupa para a interface (incompatível) do tênis.
# Quando as mensagens que as classes utilizam para se comunicar estão em "linguagens distintas", não podemos simplesmente mudar a linguagem; isso iria quebrar todos os outros lugares em que esta classe é utilizada! Uma terceira entidade, que faz a "tradução" é normalmente a saída mais organizada.
# Exercício de fixação
# Olhe ao seu redor e tente identificar objetos que fazem o papel de um Adapter: um objeto que é necessário para que duas outras coisas funcionem juntas, que não conseguiriam funcionar juntas sem este adaptador.