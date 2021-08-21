# Estruturas condicionais 

salary = 6000

position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

# Note que if e elif são seguidos de uma expressão que se avaliada como verdadeira, o trecho de código será executado. Um outro detalhe é a ausência de chaves para definir o bloco. Utilizamos o caractere : para indicar abertura de um bloco e somente indentação para indicar o término.
# O bloco else será executado se nenhuma das condições anteriores for satisfeita.
# Agora que escrevemos mais linhas, notamos também a ausência do caractere ; . Pois bem, a filosofia da linguagem nos diz: "Legibilidade conta...", então não precisamos mais dele.
# Agora com a senioridade em mãos, podemos criar uma nova coluna em nossa base dados com essa informação e realizar o agrupamento por cargo, desenhando lindos gráficos. 📊
# Posso modificar para uma estrutura switch ?
# A estrutura condicional if e seu aninhamento com elif e else é tão simples e legível que não precisamos da estrutura switch .
# "Simples é melhor do que complexo" - Zen do python
# Em alguns casos, que não prejudiquem a legibilidade, podemos criar estruturas de mapeamento ( dicts ) para simplificar o aninhamento de condicionais.

key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]
