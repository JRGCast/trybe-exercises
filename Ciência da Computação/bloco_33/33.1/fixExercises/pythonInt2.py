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

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.
