# Está divertido programar no terminal interativo e ter uma resposta logo em seguida, mas se eu fechar o terminal irei perder tudo que fiz até agora e programas do dia a dia não são assim.
# Vamos então escrever nossos primeiros arquivos de código? Mas antes de seguirmos, que tal darmos uma olhadinha no Guia de configuração de ambiente Python ?
# Antes de escrever nosso primeiro arquivo, precisamos saber que todo arquivo com extensão .py é considerado um módulo. Módulos são declarados utilizando snake case , ou seja, com nomes minúsculos e quando possuírem mais de uma palavra, devem ser separadas por underscore ( _ ).
# Vamos agora criar o arquivo area.py , vamos declarar funções que calculam a área de algumas figuras geométricas.

PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    '''Calculate area of square.'''
    return side * side


def rectangle(length, width):
    '''Calculate area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate area of circle.'''
    return PI * radius * radius

# nada acontece se não chamar a função né?

# Para corrigir, podemos acrescentar uma condicional ao módulo para somente exibir esses valores de teste quando o módulo for executado como script .
# A variável __name__ é utilizada pelo interpretador Python para identificar o arquivo que esta sendo executado e seu valor será "__main__" quando invocamos um módulo como script .
if __name__ == "__main__":
  print("Área do quadrado:", square(10))
  print("Área do retângulo:", rectangle(2, 2))
  print("Área do círculo:", circle(3))
