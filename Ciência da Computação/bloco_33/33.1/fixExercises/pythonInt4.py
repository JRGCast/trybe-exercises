# Estruturas de repetição
# for
# 🥗 Pense em um sistema que faça a listagem de restaurantes. Estes restaurantes possuem uma nota proveniente da avaliação dos seus clientes.
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]
# Quando um cliente pede a listagem de restaurantes, ele pode escolher filtrar o resultado de acordo com a nota.
# Podemos fazer isto percorrendo a lista de restaurantes, criando uma nova lista com somente aqueles que atendem ao filtro.
filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Dado que a maior parte do tempo estamos percorrendo estruturas, os criadores da linguagem decidiram que o for each seria o laço de repetição principal na linguagem.
# Para cada repetição do nosso laço, um novo elemento da estrutura iterável é atribuído a variável de iteração. No exemplo acima vemos que, a cada iteração, um novo restaurante é colocado na variável restaurant .
# 💡 Em alguns casos, ainda podemos querer percorrer uma sequência numérica, e para isto iteramos sobre a estrutura de dados range .
for index in range(5):
    print(index)
# Além de listas, várias outras estruturas são iteráveis, como strings ( str ), tuplas ( tuple ), conjuntos ( set ), dicionários ( dict ) e até mesmo arquivos.

# Compreensão de listas
# Existe uma maneira mais "pythônica" de se fazer isto! 🐍
# Quando uma nova lista é criada como resultado de uma iteração, podemos simplificar utilizando compreensão de listas .
min_rating = 3.0
filtered_restaurants = [restaurant
                         for restaurant in restaurants
                         if restaurant["nota"] > min_rating]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D
# A compreensão de listas é declarada da mesma maneira que uma lista comum, porém no lugar dos elementos nós colocamos a iteração que irá gerar os elementos da nova lista. Um detalhe importante é que é possível filtrar esses elementos utilizando o if .
# Poderíamos listar também somente o nome dos restaurantes.
min_rating = 3.0
filtered_restaurants = [restaurant["name"]  # aqui pedimos somente o nome do restaurante
                       for restaurant in restaurants
                       if restaurant["nota"] > min_rating]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D
# Isto é equivalente às operações de map e filter em JavaScript.
# while

# 🔢 A Sequência de Fibonacci, muito presente em diversas formas na natureza, é uma sequência numérica começando por 0 e 1 e cada termo subsequente corresponde à soma dos dois anteriores.
# Podemos escrever esta sequência da seguinte maneira:
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next
# O laço de repetição while , acontecerá enquanto a condição for satisfeita, e temos de ter o cuidado de manipular a variável presente na condicional ou entraremos em uma repetição infinita.
# No exemplo, estamos imprimindo os elementos da sequência até que atinja o valor 10.
# 💡 Foi utilizado um truque neste exemplo que se chama atribuição múltipla. Isto é atribuição de vários valores a múltiplas variáveis ao mesmo tempo. Este truque pode ser utilizado também para fazer a troca de valores entre variáveis: a, b = b, a .
# Para fixar as estruturas de repetição, vamos resolver alguns exercícios:

# Exercício 13: O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5 . Escreva um código que calcule o fatorial de um número inteiro.
fnumber = 5
counter = 1
result = 1

while counter <= fnumber:
    result = result * counter
    counter += 1
    result

# Note que usamos counter += 1 pra incrementar o contador -- não existe counter++ . Da mesma forma, poderíamos ter atualizado o resultado com a expressão result *= counter .
# Uma versão mais pythonica dessa solução usaria range :

number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number+1):
    result *= factor
    result

# Exercício 14: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100] .

# Experimente utilizar a sintaxe de compreensão de listas.

# Exercício 15: Percorra a lista do exercício 14 e imprima "Múltiplo de 3" se o elemento for divisível por 3.
