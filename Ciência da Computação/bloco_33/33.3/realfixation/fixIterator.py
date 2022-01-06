# Iterator
# Beto, seu colega que trabalha na parte de cobrança de clientes, nos trouxe uma demanda nova, dizendo:
# Costumavamos fazer os relatórios de cobrança a clientes de forma manual, mas isso se tornou impossível com o crescimento de clientes que aconteceu 3 meses atrás. Estamos com um atraso de 3 meses de relatório! Agora nossa empresa comprou uma ferramenta automática de relatórios, mas o meu computador não conseguiu carregar 3 meses de tabela para fazer o relatório! Só tenho 2 GB de memória."
# Vixe, Beto, realmente é um problema. Mas não tema, vamos conseguir resolver! Pense, como você resolveria este problema?
# Pausa para pensar . . .
# Depois de debater soluções com o time, entendemos que o problema é o tamanho do que está sendo carregado no servidor em que o Beto trabalha. Não podemos carregar os 300 GB de dados do banco, então decidimos que vamos precisar separar o resultado da consulta em partes pequenas, pegando uma de cada vez, para alimentar a aplicação de relatórios que roda no PC com 2 GB.

class DatabaseIterable:
    def __init__(self, sql_connector, query_template):
        self.db = sql_connector
        self.query_template = query_template

    def get_page(self, page):
        return self.db.get(query=self.query_template, page=page)

    def __iter__(self):
        """Aqui iniciamos a iteração, retornando um objeto DatabaseIterator
        como Iterador."""

        return DatabaseIterator(self.db)


class DatabaseIterator:
    def __init__(self, sql_connector):
        """No construtor da classe iteradora definimos o valor inicial do
        contador current_page, e também o(s) atributo(s) que será(ão)
        responsável(is) por armazenar/acessar a coleção de dados pela qual
        queremos iterar."""

        self.db = sql_connector
        self.current_page = 0

    def __next__(self):
        """Este método busca no banco de dados a página que queremos e
        incrementa o contador current_page, para retornarmos a próxima página
        na próxima vez que o método for chamado."""

        data = self.iterable.get_page(page=self.current_page)

        """É uma boa prática a utilização da exceção StopIteration() para
        indicar que não foi possível avançar na iteração. Ou seja: tentamos
        acessar uma current_page que não existe."""

        if not data:
            raise StopIteration()

        self.current_page += 1
        return data

# Note que cada vez que chamarmos o método next() na instância retornada por iter() , receberemos uma parte pequena dos dados, que o Beto pode utilizar na sua ferramenta de relatórios.
# Duas formas diferentes de se navegar por um mesmo conjunto de dados
# Para o padrão iterator não importa como você progride, desde que retorne o próximo elemento
# Mas espera um pouco, esse negócio de acessar partes pequenas de um conteúdo maior, uma de cada vez, acho que já vimos isso em algum lugar, não?
# Veja:

minhas_linguagens = ["javascript", "python", "C", "Go"]
for linguagem in minhas_linguagens:
    print("Eu sei programar em: ", linguagem)

# lista_de_compras = open("compras.txt", "r")
# for item in lista_de_compras:
#     print("Eu devo comprar: ", item)

# O padrão iterator é aplicado para facilitar e unificar a resolução de todos os problemas que encontrarmos que são similares a "preciso operar sobre vários elementos, mas um de cada vez". É implementado de várias formas em diferentes linguagens, sempre buscando facilitar a nossa vida.
# No Python por exemplo, quando chamamos um for para iterar sobre um objeto, a linguagem envia para o mesmo a mensagem __iter__() , de modo a obter um iterador ; em seguida, envia para o iterador a mensagem __next__() para encontrar o próximo item, e o próximo, e o próximo... até o iterador se esgotar (levantar a exceção StopIteration() )! Assim, toda classe que implementar o padrão Iterator pode ser usado com estruturas como o for ! Listas, tuplas, dicionários, árvores, até arquivos.
# Por exemplo, nosso iterador do banco de dados poderia ser acessado assim:

# Primeiro instanciamos o ITERÁVEL
# post_paginator = DatabaseIterable(db, post_page_query_template)

# Em seguida podemos usar o for pra iterar
# o ITERADOR é criado implicitamente
# for page in post_paginator:
#     # faz algo com a pagina, que é uma lista de resultados
#     for post in page:
#         print(post['title'])

# Exercícios de fixação
# Em seu terminal Python, crie uma nova lista, uma lista normal, com alguns elementos. Agora, chame o método __iter__() desta lista, e veja que é retornado um objeto list_iterator
# Guarde este objeto em uma variável, e chame o seu método __next__() para ver o que acontece!

test_list = ["a", "b", "c", "d"]
iter_method = test_list.__iter__()
print(iter_method.__next__()) # a
print(iter_method.__next__()) # b