class Student:
  # De forma geral, variáveis de instância são variáveis que indicam dados que são únicos a cada instância individual, e variáveis de classe são variáveis de atributos e de métodos que são comuns a todas as instâncias de uma classe:

  what_i_am = "Student" # isto será compartilhado por todas as instâncias originadas desta classe

  # Muitas classes preferem criar novos objetos com um estado inicial predeterminado. Para tanto, a classe pode definir um método especial chamado __init__(), assim: (método é uma função dentro de uma classe)
  def __init__(self, name, age, email, password='1234', respect=True): # o __init__ é um método construtor
      """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python. Cada atributo daqui será único para cada instância"""
        # atributos são variáveis não compartilhadas com as instâncias
      self.name = name # isto é um atributo
      self.age = age
      self.email = email
  def say_hello(self): # isto também é um método
    return f"hello, I am {self.name}"

  pass

# Para instanciar uma classe, usa-se a mesma sintaxe de invocar uma função. Apenas finja que o objeto classe do exemplo é uma função sem parâmetros, que devolve uma nova instância da classe. Por exemplo (assumindo a classe acima):

john = Student('John', 20, 'joe@g.com') # isto é uma instanciação da classe (não existe o new)
rolo = Student('Rolo', 58, 'rolo@yahoo.com')

# característica comum a todas as instanciações:
print(john.what_i_am) # Student
print(rolo.what_i_am) # Student

#características únicas:
print(john.say_hello())
print(john.name) # John
print(rolo.say_hello())
print(rolo.name) # Rolo
