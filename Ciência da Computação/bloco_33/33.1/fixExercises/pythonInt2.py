# Inicialize uma variável a = 5 , comande type(a) e observe o retorno. # Resultado é <class 'int'>;
# 💡 O método type(operando) corresponde ao operador typeof operando do JavaScript.

# O segundo tipo numérico é o float , também conhecido por ponto flutuante, que representa um número decimal ou fracionário.
# Inicialize uma variável a = 5.0 , comande type(a) e observe o retorno. # Resultado é <class 'float'>

# Como novidade e último tipo numérico, temos o complex .
# Já vimos como representar números inteiros ou fracionários, mas sabia que números complexos podem ser representados também?
# Basta colocar o número real acrescido da sua parte imaginária, trocando o i por j.
3 + 4j  # saída: (3+4j)
# Operações matemáticas podem ser feitas da mesma maneira com números complexos.
(3 + 4j) + 4  # saída: (7+4j)
# Inicialize uma variável a = 5j , comande type(a) e observe o retorno. # Resultado é <class 'complex'>

# Além dos tipos numéricos, temos o tipo de sequência de texto str , que representa uma cadeia de caracteres ou, como popularmente conhecida, uma string. As strings são definidas envolvendo um valor com aspas simples ou duplas.

# Os valores booleanos True e False pertencem ao tipo embutido bool . Aqui devemos ficar atentos ao início maiúsculo dessas palavras reservadas.
# E temos ainda estruturas do tipo sequência( list , tuple , range ), conjuntos( set , frozenset ), mapeamento( dict ), sequências binárias( bytes , bytearray , memoryview ) e mais um monte! 😓

fruits = ["orange", "apple", "grape", "pineapple"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por indices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("pineapple")  # removendo uma fruta

fruits.extend(["pear", "melon", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("apple")  # retorna o índice onde a fruta está localizada, neste caso 1 em seu programa

fruits.sort()  # ordena a lista de frutas ATENÇÃO: O método sort com números não precisa da frescuragem do JS em números acima de 9

trybe_course = ["Introdução", "Front-end", "Back-end"]
# 🎨 Funções e variáveis devem ser nomeadas com letras minúsculas e underscore, caso tenham mais de uma palavra: minha_variavel.

# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
print(trybe_course)
trybe_course.append("Ciência da Computação")
print(trybe_course)

# Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course[0] = "Fundamentos"
print(trybe_course)

# Tuplas (tuple)
# São similares a listas, porém não podem ser modificados durante a execução do programa.
# Sintaxe:
# Copiar
user = ("Cássio", "Botaro", 42)  # elementos são definidos separados por vírgula, envolvidos por parenteses

user[0]  # acesso também por índices

# tentar reatribuir uma tupla acontece: user[0] = 'Sha' TypeError: 'tuple' object does not support item assignment

# Conjuntos (set)
# Conjunto de elementos únicos e não ordenados. Como conjuntos, implementam operações de união, intersecção e outras.
# Sintaxe:

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união, porém não modifica permissions, devendo ser utilizado na atribuição de novo conjunto

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos, isto é, verifica qual deles existem dentro de permissions

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos, isto é, praticamente um filter !== "user"

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.
var = set()
var.add("John")
print(var) # Resultado = {'John'}

# Conjuntos imutáveis (frozenset)
# Variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa, logo, não existe .add e semelhantes
# Sintaxe:

imput_permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

imput_permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

imput_permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

imput_permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# Dicionários (dict)
# Estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que utilizamos em JavaScript.
# Sintaxe:

people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Cássio": 1, "João": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves (ao contrário de JS, as aspas duplas são obrigatórias)

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Cássio

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Cássio"), (2, "João"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Em JavaScript, não precisávamos colocar a chave do objeto entre aspas, porém, em Python, isso é necessário.
# Exercício 8: O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando object.key ?
# info.personagem resulta em AttributeError: 'dict' object has no attribute 'personagem', para acessar, é necessário info["personagem"]

# Exercício 9: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
print(info)
info["recorrente"] = "sim"
print(info["recorrente"])

# Exercício 10: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.
print(info)
del info["origem"]
print(info)

# Range (range)
# Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, modificando seu valor de acordo com o passo ( step ) definido. Pode ser declarado como range( [start], stop[, step] ) , em que start e step podem ser omitidos, possuindo valores iniciais iguais a 0 e 1 respectivamente.
# Um ponto de atenção é que o stop não é incluído na sequência, portanto caso queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11)
# Seus valores são criados a medida que esta sequência é percorrida.
# Sintaxe:

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5 ,7 , 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
# 💡 Além dos tipos básicos, temos outros como datas, tuplas nomeadas, arrays, enumerações e outros, mas estes tem de ser importados de seus respectivos módulos.

# Exercício 11: Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.
# A estrutura recomendada é a tuple . Caso houvesse necessidade de editar os valores ou adicionar mais valores, usaríamos uma list .

# Exercício 12: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual estrutura mais recomendada para armazenamento desta contagem?
# dict é a estrutura mais adequada, pois conseguimos armazenar o elemento da lista como chave e a quantidade de vezes que ele aparece como valor da chave.
