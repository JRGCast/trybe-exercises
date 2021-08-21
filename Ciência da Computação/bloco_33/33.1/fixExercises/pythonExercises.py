# Agora a prática
# Vamos colocar tudo o que vimos até agora em prática. Em todos os exercícios, crie funções para solucionar os problemas. Tenho certeza que vocês já viram isso. 😆
# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def return_bigger(x, y):
  if(x > y): return x
  else: return y

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
# ATENÇÃO SEMPRE TENHA MUITA ATENÇÃO À IDENTAÇÃO EM PYTHON
def list_aritmed(list):
    total=0
    for element in list:
      total += element
    return total / len(list)

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
# n = 5
# *****
# *****
# *****
# *****
# *****
# # 🦜 Dica: A função print aceita um parâmetro nomeado end que pode ser utilizado para imprimir sem a quebra de linha. Por exemplo, print(4, end="") e print(2) irá imprimir 42 e depois quebrar a linha.
# Sentiu aí um certo dejavu? 😁

def ast_square(num):
  for index in range(num):
    print('*' * num)

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .
# # 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.
def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).
def paint(m2):
  if(m2) < 54: return "1, Custo: R$80,00"
  else:
    can_price = 80
    required_liters = m2 / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return int(required_cans), f"Custo: {required_cans * can_price}"

# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
# # 🦜 Dica:
# 
#   Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.

def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"

# Bônus
# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 3.

def minimum(numbers):
    smaller = number[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller
# 🦜 Dica: a função min já existe nativamente no Python! Trabalhando em Python, sempre compensa pesquisar uma solução primeiro porque este brinquedo vem com todos os acessórios inclusos!

def minimum(numbers):
   return min(numbers)

# ou mesmo
minimum = min

# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo, para n=5 o triângulo terá 5 asteriscos na base:

# n = 5

# *
# **
# ***
# ****
# *****

def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * '*')

# Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.

def summation(limit):
    total = 0
    for number in range(1, limit + 1):
        total += number
    return total
# 🦜 Dica: a função sum já existe nativamente no Python!

def summation(limit):
    return sum(range(1, limit + 1))

# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:

#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
