# Apenas para complementar já que os exercícios não abordaram: some os argumentos recebidos
import sys

if __name__ == "__main__":
    numArr = sys.argv
    numArr.remove(numArr[0]) # o nome do próprio arquivo entra como argumento de sys.argv
    total=0
    for argument in numArr:
        print(argument)
        if not argument.isdigit(): 
            print(f"O argumento > {argument} < não é um número!")
        else:
            total+=int(argument)
    print(f"O resultado dos argumentos válidos é {total}")
