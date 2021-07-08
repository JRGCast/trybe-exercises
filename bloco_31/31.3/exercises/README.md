1. Antes de começar faça o setup básico para sua aplicação ter a comunicação do socket preparada do lado do cliente e do lado do servidor.
2. Faça com que quando o cliente clicar no elemento com o id likeIcon , seja emitido um evento likePost para o servidor.
3. Do lado do servidor faça um listener para capturar o evento likePost que vai incrementar a quantidade atual de likes do post.
4. Emita um evento updateLikes apenas para o cliente que enviou o like enviando a quantidade atual de likes.
5. Modifique o código feito no exercício anterior para com que o evento updateLikes seja enviado para todos os clientes conectados.
6. Faça com que o ícone com id starIcon emita um evento starPost e atualize a quantidade diretamente pelo front-end.
7. No servidor implemente um listener para o evento starPost e emita um evento updateStars com a quantidade para todos os clientes exceto o cliente que enviou o evento.
8. Implemente um listener para o evento updateStars para atualizar a quantidade atual de estrelas.

Bônus
Reestruture a aplicação para usar a arquitetura MVC e refatore toda a parte do socket para permitir que seja possível fazer like especificamente em cada tweet sem afetar a quantidade dos demais.
