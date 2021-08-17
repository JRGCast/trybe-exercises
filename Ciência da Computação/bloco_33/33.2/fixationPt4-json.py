# Manipulando arquivos JSON

# JSON é um formato textual muito utilizado para integração de sistemas. Ele é baseado em um subconjunto de regras JavaScript , embora seja independente de linguagem.
# Por sua legibilidade e tamanho (é bem leve), além da facilidade de leitura e escrita por seres humanos e máquinas, vem sendo bastante utilizado na web e para troca de informações entre sistemas.
# Alguns exemplos de utilização incluem comunicação back-end e front-end , comunicação com sistemas externos, como por exemplo gateways de pagamento , ou também internos como um sistema de autenticação.
# A linguagem Python já inclui um módulo para manipulação desse tipo de arquivo e seu nome é json .

# Seus principais métodos para manipulação são: load , loads , dump , dumps .
# 🐭 Para demonstrar de como é feita a manipulação de arquivos JSON , vamos utilizar o arquivo pokemons.json que é uma lista de pokemons com suas informações chave.
# 💡 Para fazer o exemplo copie o conteúdo da lista e cole num arquivo pokemons.json na raiz do diretório em que estará o seu script.

import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
    pokemons = json.loads(content)["results"]  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(f" 1st {pokemons[0]}\n")  # imprime o primeiro pokemon da lista

# A leitura pode ser feita diretamente do arquivo, utilizando o método load ao invés de loads . 
# 💡 O loads carrega o JSON a partir de um texto e o load carrega o JSON a partir de um arquivo.

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(f" 2nd {pokemons[0]}\n")  # imprime o primeiro pokemon da lista

# A escrita de arquivos no formato JSON é similar a escrita de arquivos comum, porém primeiro temos de transformar os dados.

# Leitura de todos os pokemons
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(f" 3rd: jsonFile grass_pokemons \n")
# Separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# Abre o arquivo para escrevermos apenas o pokemons do tipo grama
with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    )  # conversão de Python para o formato json (str)
    file.write(json_to_write)

# Assim como a desserialização, que faz a transformação de texto em formato JSON para Python , a serialização, que é o caminho inverso, também possui um método equivalente para escrever em arquivos de forma direta.


# leitura de todos os pokemons
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

# separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# abre o arquivo para escrita
with open("grass_pokemons.json", "w") as file:
    # escreve no arquivo já transformando em formato json a estrutura
    json.dump(grass_type_pokemons, file)
# 💡 Arquivos JSON não seguem a nomenclatura habitual de leitura e escrita ( write e read ), pois são considerados formatos de serialização de dados. Seguem então as mesmas nomenclaturas utilizadas em módulos como marshal e pickle , que também são formatos de serialização.
