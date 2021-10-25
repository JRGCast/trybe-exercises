class User:
    def __init__(self, name, email, password):
      """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
      self.name = name
      self.email = email
      self.password = password

# Para invocar o método construtor, a sintaxe é NomeDaClasse(parametro 1, parametro 2, ...parâmetro N)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)
# A variável `meu_user` contém o objeto criado pelo construtor da classe User!

# PILARES DA PROGRAMAÇÃO ORIENTADA A OBJETOS: 
# CRIAR UMA ENTIDADE => ABSTRAÇÃO;
# NÃO PRECISO SABER COMO FUNCIONA (apenas o que recebe e o que 'cospe') => ENCAPSULAMENTO;
