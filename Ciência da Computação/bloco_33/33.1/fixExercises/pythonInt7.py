import pythonInt6

# Vamos então utilizar o nosso módulo de calcular área de figuras planas. Vamos escrever um novo arquivo com nome pytohnInt7.py e ele será um script para calcular pessoas que estão presentes em um show, dado a área do mesmo.

PEOPLE_AT_CONCERT_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 240  # em metros
FIELD_WIDTH = 45  # em metros
PEOPLE_AT_CONCERT = pythonInt6.rectangle(FIELD_LENGTH, FIELD_WIDTH) // PEOPLE_AT_CONCERT_PER_SQUARE_METER


print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")

# O import é utilizado para termos todas as funções do módulo disponíveis em outro arquivo. Uma outra maneira de utilizarmos o import é utilizando from pythonInt6 import rectangle , porém, tome cuidado com conflitos de nomes caso utilize a segunda maneira.
# Ao executa-lo com o comando python3 pythonInt7.py vemos que a saída não saiu bem como esperávamos.
# Resultado: 
# Área do quadrado: 100
# Área do retângulo: 4
# Área do círculo: 28.259999999999998
# Estão presentes no show aproximadamente 5400 pessoas

# Nossa! Os nossos valores de teste estão sendo exibidos quando importamos o módulo. 😨 Mas não queremos isto!  (vá para o arquivo pythonInt6.py)

