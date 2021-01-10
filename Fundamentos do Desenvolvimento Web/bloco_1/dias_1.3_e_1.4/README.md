## Descrição dos Exercícios destes dias: :closed_book:

### Dia 1.3

#### Parte I - Criação de arquivos e diretórios:

<b>Dica</b>: Para criação de arquivos vazios você pode utilizar o comando touch nome-do-arquivo.extensao.

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.

2. Crie um arquivo de texto com o nome trybe.txt.

3. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.

4. Renomeie o arquivo trybe.txt.
5. entro de unix_tests, crie um novo diretório chamado backup.
6. Mova o arquivo trybe_backup.txt para o diretório backup.
7. Dentro de unix_tests, crie um novo diretório chamado backup2.
8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.
9. Apague a pasta backup.
10. Renomeie a pasta backup2 para backup.
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
12. Apague o diretório backup.
13. Limpe o terminal.

<b>Para os exercícios, 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional, um arquivo de texto com o conteúdo abaixo, chamado skills.txt:</b>
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL 14. Mostre na tela as 5 primeiras skills do arquivo skills.txt. 15. Mostre na tela as 4 últimas skills do arquivo skills.txt. 16. Apague todos os arquivos que terminem em .txt.

#### Parte II - Manipulação & Busca:

1. Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

2. Mostre todo o conteúdo do arquivo countries.txt na tela.
3. Mostre o conteúdo de countries.txt, página por página, até encontra a Zambia.
4. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
5. Busque por Brazil no countries.txt.
6. Busque novamente por brazil, mas agora utilizando o lower case.
7. Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases a sua escolha. Não 8. precisa criar o arquivo pelo terminal.
8. Busque pelas frases que não contenham a palavra fox.
9. Conte o número de palavras do arquivo phrases.txt.
10. Conte o número de linhas do arquivo phrases.txt.
11. Crie os arquivos empty.tbt e empty.pdf.
12. Liste todos os arquivos do diretório unix_tests.
13. Liste todos os arquivos que terminem com txt.
14. Liste todos os arquivos que terminem com tbt ou txt.
15. Acesse o manual do comando ls.

### Dia 1.4

#### Parte I - Comandos de Input e Output:

##### (Continuamos a partir dos exercícios anteriores)

1. Navegue até a pasta unix_tests;
2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.
3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
4. Conte quantas linhas tem o arquivo skills2.txt.
5. Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.
6. Crie um novo arquivo chamado phrases2.txt pelo o terminal e adicione algumas frases de suas escolha.
7. Conte o número de linhas que contêm as letras br.
8. Conte o número de linhas que não contêm as letras br.
9. Adicione dois nomes de países ao final do arquivo phrases2.txt.
10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
11. Ordene o arquivo bunch_of_things.txt.

#### Parte II - Permissões:

1. Navegue até a pasta unix_tests;
2. Rode o comando ls -l e veja quais as permissões dos arquivos;
3. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;
   Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
4. Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;
   Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
5. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt. Leia este artigo para entender mais sobre o que é e como funciona essa numeração 644.
   Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

#### Parte III - Processos & Jobs:

1. Liste todos os processos;
2. Agora use o comando sleep 30 & ;
3. Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);
4. Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;
5. Crie um processo em background que rode o comando sleep por 300 segundos.
6. Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
7. Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.
8. Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.
9. Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal).
10. Retome a execução do processo sleep 100 em background com o comando bg.
11. Termine a execução de todos os processos sleep (mate os processos).

#### (Bônus) - Parte IV - O despertar do terminal

E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do UNIX? ☝ 🎊
[Leia este artigo para fazer os exercícios de aquecimento abaixo](https://canaltech.com.br/linux/11-comandos-divertidos-e-inuteis-para-usar-no-linux/)

- Abra o terminal e execute o comando cmatrix. Quando estiver se sentindo como o Neo, aperte ctrl+c para voltar ao terminal;

- Crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune, e o operador >;
  Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc;

- Execute o comando sl. Agora tente sl -F;

- Execute o comando cowsay. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt;

- Descubra os fatores primos do número 42 usando o comando factor;

- Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev.

- Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅

#### Recapitulando...

- Agora que você passou um bom tempo estudando sobre o Unix e seus comandos, sabemos que você já entende que:
- O Unix é um sistema operacional que inspirou muitos outros sistemas, como MacOS, Linux, Solaris etc.;
- O Unix é composto basicamente pelo Shell, Kernel e os programas;
- A estrutura de diretórios do Unix é organizada no formato de uma árvore invertida, de forma hierárquica, iniciando pelo root;
- Tudo no Unix é um arquivo ou um processo;
- O terminal é seu principal aliado para ter produtividade em ambiente Unix;
- Depois de entender como abrir e utilizar o terminal, você aprendeu na prática como utilizar os comandos Bash. Vamos relembrar alguns dos comandos que você aprendeu a usar.
- Um bom exercício é, mentalmente, tentar descrever o que cada comando faz.
- ls, mkdir, cd, pwd, cp, mv, rm, rmdir, clear, cat, less, head, tail, grep, wc, >, >>, |, sort, who, man, whatis, apropos, \*, ?, chmod, ps, bg, kill, find, history.
