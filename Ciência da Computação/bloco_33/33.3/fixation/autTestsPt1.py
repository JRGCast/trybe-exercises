# Testes automatizados 
# Quem nunca arrumou um problema em um código e acabou fazendo-o deixar de funcionar para outro cenário? Ou ficou horas testando as mais diversas condições para um algoritmo e no meio do caminho teve de mexer no código e recomeçar tudo novamente. 😁
# Através de testes automatizados, a pessoa desenvolvedora é capaz de identificar mais facilmente um bug ou verificar que alterações do código não afetaram o comportamento esperado do sistema.
# Em nosso curso utilizaremos a biblioteca pytest , um framework que facilita a escrita de testes simples, mas capazes de testar funcionalidades complexas em aplicações e bibliotecas.
# ⚠️ Lembre-se de instalar a biblioteca somente no ambiente virtual do seu projeto.
# A instalação é feita através do pip utilizando o comando:
# python3 -m pip install pytest
# E podemos verificar utilizando o comando:
# python3 -m pytest --version
# A saída esperada é similar à apresentada abaixo.
# This is pytest version 5.3.0, imported from /home/cassiobotaro/projects/gerenciador-tarefas/.venv/lib/python3.8/site-packages/pytest.py
# 📝 Que tal vermos um exemplo?

# teste o arquivo test_codigo1.py e se coincide com o que o codigo1.py queria fazer

# Notem que o nome do arquivo de testes possui o prefixo test_ , assim como a definição das funções de teste. Isto é necessário para que seus testes sejam descobertos pela ferramenta.
# Uma função de teste é similar a qualquer outra, porém tem o proposito de verificar se o resultado obtido foi o mesmo do esperado. No código isto pode ser visto através da utilização da palavra reservada assert .
# O comando assert funciona da seguinte maneira: caso a expressão recebida seja verdadeira (avaliada como True ), nada acontece, porém caso seja falsa (avaliada como False ), uma exceção do tipo AssertionError é lançada. A pytest captura este erro e tenta apresentar uma comparação entre o esperado e o recebido da melhor maneira possível.
# Vamos rodar nossos testes e ver o resultado? Vamos utilizar o comando:

# python3 -m pytest
