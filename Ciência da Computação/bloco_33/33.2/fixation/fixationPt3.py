# Lidando com exceções
# Há pelo menos dois tipos de erros que podem ser destacados: erros de sintaxe e exceções .
# Erros de Sintaxe
# Como nós bem sabemos, erros de sintaxe ocorrem quando o código utiliza recursos inexistentes da linguagem, que não consegue interpretá-lo. É como chamar a função primt em vez de print .
# Exceções
# Já as exceções, ocorrem durante a execução e acabam resultando em mensagem de erro. Veja exemplos de exceções:

# print(10 * (1 / 0))
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
# print(4 + spam * 3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'spam' is not defined
# print('2' + 2)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str
# Observe que, apenas no exemplo acima, podemos observar três exceções: ZeroDivisionError , NameError e TypeError . A lista completa de exceções já embutidas na linguagem pode ser vista aqui .
# Tratamento de exceções
# Para tratarmos exceções, utilizamos o conjunto de instruções try , com as palavras reservadas try e except . O funcionamento dessa cláusula ocorre da seguinte forma:
# Se nenhuma exceção ocorrer, a cláusula except é ignorada, e a execução da instrução try é finalizada.
# Se ocorrer uma exceção durante a execução da cláusula try , as instruções remanescentes na cláusula são ignoradas. Se o tipo da exceção ocorrida tiver sido previsto em algum except , então essa cláusula será executada.
# Se não existir nenhum tratador previsto para tal exceção, trata-se de uma exceção não tratada e a execução do programa termina com uma mensagem de erro.
# Vamos agora ver um exemplo de tratamento de exceções:

while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")
# Cole o código acima no terminal interativo e teste, na prática, como funciona o tratamento de exceções.
# Lidando com exceções enquanto manipulamos arquivos
# Agora cientes de como tratar exceções, podemos nos previnir de possíveis erros que ocorrem quando manipulamos arquivos. Sempre devemos fechar um arquivo e podemos, em um bloco try , fazer isso utilizando a instrução finally ou else . O finally é uma outra cláusula do conjunto try , cuja finalidade é permitir a implementação de ações de limpeza, que sempre devem ser executadas independentemente da ocorrência de ações. Já o else ocorre sempre que todo o try for bem sucedido.

try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")
# Como estamos abrindo o arquivo em modo de leitura, caso ele não exista, uma exceção será levantada, executando as cláusulas exception e finally . Entretanto se alterarmos o modo para escrita, o arquivo será criado mesmo se inexistente, executando as cláusulas else e finally .
# Este padrão é tão comum, não só em arquivos como em outros recursos que devemos utilizar e liberar ao final, como conexões de banco de dados, por exemplo, que o Python tem um mecanismo próprio para lidar com isto.
# O with é a palavra reservada para gerenciamento de contexto. Este gerenciamento ( with ) é utilizado para encapsular a utilização de um recurso, garantindo que certas ações sejam tomadas independentemente se ocorreu ou não um erro naquele contexto.
# A função open retorna um objeto que se comporta como um gerenciador de contexto de arquivo que será responsável por abrir e fechar o mesmo. Isto significa que o arquivo possui mecanismos especiais que, quando invocados, utilizando with , alocam um determinado recurso, no caso um arquivo, e, quando o bloco for terminado, este recurso será liberado.

# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
with open("arquivo1.txt", "w") as file:
    file.write("Michelle 27\n")
    print('arquivo1 criado e escrito com sucesso')
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)
# 💡 Já vimos a utilização de gerenciadores de contexto em testes. Lá, capturamos exceções que ocorrem e verificamos se naquele contexto a exceção lançada era a esperada. Não há um recurso a ser liberado, mas estamos garantindo que uma asserção será feita naquele contexto.
# Vamos praticar um pouco?

# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que lê todas essas informações e filtre mantendo somente as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo. A nota miníma para aprovação é 6.
# Arquivo:
# Copiar
# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5
# Exemplo saída:
# Copiar
# Felipe
# Miguel
# 🦜 A função split pode ser utilizada para dividir o nome em uma linha. Ex: line.split -> ["Marcos", "10"]

alunos = ['Marcos 10', 'Felipe 4', 'José 6', 'Ana 10', 'Maria 9', 'Miguel 5']

with open("alunos.txt", "w") as file:
  for aluno in alunos:
    file.write(f'{aluno}\n')
print('Alunos.txt criado e escrito com sucesso')
print(file.closed)

recSt = []
with open("alunos.txt", "r") as reading: 
  for row in reading:
    splited = row.split(" ")
    student, grade = splited
    if int(grade) < 6:
      phrase = f"{student} está de recuperação teve nota {grade}"
      recSt.append(phrase)
print(recSt)

with open("recAlunos.txt", "w") as recAl:
  recAl.writelines(recSt)
print(reading.closed)
