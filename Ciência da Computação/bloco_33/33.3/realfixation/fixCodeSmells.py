# Code Smells
# Conforme naturalmente desenvolvemos o nosso código, existem algumas práticas que a princípio podem parecer a melhor forma de resolver o problema, naquele momento, porém trazem problemas eventualmente. Estas práticas acabaram ficando famosas na comunidade de programação, por serem coisas que acontecem muito. Foram apelidados de "code smells"; maus cheiros no código, indicando que algo está errado, embora possa não parecer de imediato.

# Reconhecer estas práticas é importante para que possamos identificá-las em nosso código, e assim evitar problemas e dificuldades. Você já deve ter se deparado com alguns deles, só não sabe ainda seus nomes:
# Long Method : métodos grandes geralmente significam mais de uma responsabilidade em um mesmo trecho de código. Por isso, como regra geral, métodos não devem ser muito longos;
# Large Class : classes grandes geralmente significam mais de uma responsabilidade. Por isso, como regra geral, classes não devem ser muito grandes;
# Duplicate Code : códigos duplicados geralmente significam falta de abstração, ou seja, lógica repetida que poderia estar centralizada em uma única entidade compartilhada. Assim sendo, uma aplicação não deve ter trechos de código duplicados;
# Dead Code : se um código não está mais sendo utilizado, porque ainda está lá?
# Speculative Generality : quem nunca tentou adivinhar o futuro e tornou uma implementação mais complicada do que precisava? Essa aqui é extremamente comum de fazermos sem perceber!
# Vamos dar uma olhada em mais alguns exemplos!