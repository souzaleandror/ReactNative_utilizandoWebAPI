#### 02/01/2024

Curso de React Native: utilizando Web API

```
 npm install -g json server
 npm install json-server@alpha
 npm fund
 npm audit fix
json-server db.json
json-server --watch --host 192.168.178.24  db.json
npm start
```

@01-Conhecendo a Web API 

@@01
Apresentação

[00:00] André: Olá eu sou o André Cunha, instrutor de Mobile aqui da Alura e aqui comigo nesse vídeo de introdução está a Natália. Nesse curso, vamos aprender a como fazer um aplicativo que se comunica com o serviço externo online, as nossas famosas Web API.
[00:15] Natalia: *André, vale lembrar também que para esse curso temos alguns pré-requisitos. É muito importante que você já tenha trabalhado com *hooks, que você também já conheça navegação entre telas e também já tenha utilizado a flat list, porque vamos utilizar isso nesse curso, mas não será mostrado tão a fundo, porque já foi ensinado em cursos anteriores.

[00:35] Lembrando que esse curso vai ser dado inteiramente pelo André, então ele vai fazer parte da formação inicial de React Native, espero que gostem. Então, é com você André.

[00:47] André: Valeu Nat. Vamos ver um pequeno spoiler desse projeto? Esse aqui é o Alura Hub, a empresa Alura nos contratou para desenvolvermos esse aplicativo, que irá se comunicar com o serviço externo da Alura, ou seja, uma Web API da Alura, para poder ler os dados dos funcionários da Alura. Vamos poder também atualizar essas informações, até mesmo deletar se for preciso.

[01:09] Na tela "Perfil" vamos poder buscar por um usuário pelo login. Vou digitar um usuário aqui que existe, “andreocunha”. A informação está vindo de um serviço externo online: ele puxou todas as informações sobre o André, o nome completo, o e-mail, a foto e também os repositórios.

[01:27] Os repositórios são os projetos que o André desenvolveu enquanto trabalhava aqui na Alura. Se clicarmos em "Ver os repositórios", localizado acima da barra de busca, podemos ver a lista desses projetos. Podemos clicar em um projeto e, ao sermos direcionados para outra tela, podemos atualizar o nome do projeto, se quisermos. Vamos apagar o "2" ao final de "api-escola 2" e clicar em “Salvar”, na parte inferior da tela. Voltamos para a lista de repositórios e um pop-up aparece confirmando que salvou.

[01:43] Essa informação está sendo salva online em um banco de dados por meio da Web API. Também podemos criar um novo repositório, clicando no botão "Adicionar novo repositório" na parte superior da tela. Vamos clicar nele para fazermos um teste. O nome será "teste" e vou colocar "10 de fevereiro" na data de criação. Vou clicar no botão “Criar”, que está abaixo do campo de data, e ele criou um novo repositório para o André. Vamos poder também deletar esse repositório.

[02:04] Isso tudo será dado nesse curso. Você vai aprender como que funcionará esse fluxo para fazermos uma requisição para uma Web API, e poderemos fazer esse belíssimo aplicativo. Espero que você tenha gostado. Venha comigo para

@@02
Preparando o ambiente: instalando o Node.js

Para esse curso, você precisará ter o Node.js instalado na sua máquina.
Baixe a versão LTS no site oficial do Node.js e instale normalmente. Feito isso, é possível verificar se a instalação ocorreu bem, abrindo o terminal e digitando:

node -vCOPIAR CÓDIGO
Ele exibirá a versão do Node.js que está instalada.

Com a instalação completa, veremos a seguir o que é uma API!

https://nodejs.org/en/

@@03
O que é uma API?

[00:00] Agora que vimos o que será abordado nesse curso e como será a nossa aplicação, vamos entender o que é uma Web API? A palavra API significa, Application Program Interface, ou Interface de Programação de Aplicações, nada mais é do que uma solução que nos permite conectar um serviço externo com o nosso aplicativo.
[00:22] Na prática, como que funciona uma Web API? Vamos supor que dispositivos como um celular, um tablet ou um computador quer acessar a plataforma da Alura e ver os cursos que tem lá. Para isso, esses dispositivos vão fazer uma chamada para uma API, no caso, uma requisição, pedindo os dados dos cursos.

[00:42] A API, por sua vez, vai se comunicar com o servidor, que você pode interpretar como se fosse um computador. Então lá nesse computador estão salvos os dados e ele que vai processar tudo.

[00:56] A API então vai pegar essa requisição e vai enviar para o servidor para ele fazer o processamento dos dados. Feito o processamento, o servidor vai retornar um resultado para API, que retorna a resposta para os dispositivos, que vão exibir os cursos, os nomes dos cursos, o tempo de duração e por aí vai.

[01:17] E como que vem essa resposta da Web API? Se por exemplo, fizermos uma requisição de um curso específico, ela vai vir mais ou menos nesse estilo: vai ter o nome, “React Native”, o tempo_estimado, que é de 10 horas. Esse formato é o JSON, mas não necessariamente uma Web API retorna um JSON. Porém, na grande maioria, e no curso que vamos trabalhar aqui, o resultado será um JSON.

[01:46] Quais tipos de requisições conseguimos fazer com uma Web API? Existem 4 principais requisições e são elas que vamos trabalhar nesse curso, que é o nosso famoso CRUD. O “C” vem de create, onde podemos criar uma nova formação. Vamos supor que um novo curso está sendo criado na Alura, então poderemos fazer uma requisição para API da Alura para salvar essas informações novas do curso.

[02:10] Poremos fazer uma leitura também, com o read, pegando os dados dos cursos que já existem na Alura. Podemos fazer um update para atualizar essas informações e, claro, um delete para poder apagar algo do sistema.

[02:24] Por que devemos utilizar uma Web API? Uma grande vantagem de uma Web API é que permitir que, por exemplo, dispositivos diferentes como um celular e um computador, acessem a mesma plataforma e consigam enviar informações que vão retornar da mesma forma. Então, supondo que você altere sua foto de perfil na Alura, ela vai ser refletida no site caso você abra no computador também. Aqui temos dispositivos diferentes trabalhando com os mesmos dados.

[02:54] Uma outra grande vantagem, é caso você perca seu celular, se ele quebrar ou você tiver que trocar ele, todo o aplicativo que você tinha uma informação que você salvou lá, vai ser recuperada para o novo dispositivo quando você instalar esse aplicativo. Essa é uma grande vantagem caso você utilize aplicativos que precisem carregar informações de outros celulares.

[03:19] Uma desvantagem é que você precisa estar conectado na Internet para fazer a comunicação com a Web API. Caso não esteja conectado, existem soluções que permitem salvarmos essas informações no aplicativo e depois recuperar. Porém, nesse curso em específico, não vamos abordar isso.

[03:39] No dia a dia temos vários aplicativos que trabalham com Web API, por exemplo, o Instagram. Quando você posta uma foto, ou quando chega um stories para você, isso está acontecendo devido a uma Web API, que está rolando ali por trás. Ela está pegando as informações do servidor do Instagram e carregando no seu aplicativo. Mesma coisa com o Facebook e até mesmo do WhatsApp. Quando você envia uma mensagem para alguém e essa mensagem sai do seu celular para o celular da outra pessoa, isso tudo pela comunicação com uma Web API.

[04:11] Vamos ver na prática uma Web API funcionando? Se você acessar no seu navegador, essa URL, "api.github.com/users/andreocunha", é uma API pública do GitHub que vai retornar informações sobre o meu usuário do GitHub, que é aquela plataforma que podemos hospedar códigos e salvar os nossos projetos.

[04:35] Então se eu clicar em “Enter” aqui, ele carrega para nós o JSON com as minhas informações do GitHub. Aqui tem o meu login, meu ID, tem a minha foto que, se eu clicar no link dela, consigo abri-la. O ID aqui podemos fazer uma analogia com o CPF: cada pessoa em um país tem um CPF único, da mesma forma como o ID dessa plataforma, que é o GitHub, vai ser único por usuário. É uma forma de identificar cada usuário de uma forma bem específica.

[05:06] Tem outras informações aqui e se você tentar acessar essa URL no seu computador, provavelmente ela não vai estar colorida assim. Só está colorida no meu navegador porque eu instalei essa extensão chamada JSON viewer, que faz esse tratamento caso abrirmos uma API no navegador.

[05:24] Existem outras APIs públicas. A própria Alura tem uma API pública, que, se você quiser testar, conseguirá ver todos os cursos que têm na plataforma, informações sobre eles, o tempo estimado daquele curso, e assim por diante.

[05:38] Existe também uma API pública no GitHub, com várias APIs públicas. Caso você tenha curiosidade, ou queira fazer um projeto depois que terminar esse curso, com matemática diferente, sobre animais por exemplo, você pode acessar aqui e ver por exemplo uma API sobre cachorros, que vai retornar uma foto de um cachorro.

[06:00] Essas APIs elas são públicas, então você pode utilizá-las, mas não necessariamente quer dizer que elas vão funcionar quando você estiver fazendo esse curso. Pensando nisso, nós não vamos utilizar uma pública nesse curso, e sim uma API própria que vai rodar no computador.

[06:18] Nesse vídeo nós vimos como funciona uma API e porque devemos utilizá-la. Nos próximos vídeos vamos criar nossas próprias APIs, e rodá-las no nosso computador, fazendo as requisições para testá-las.

https://api.github.com/users/andreocunha

https://www.alura.com.br/api/cursos

@@04
Sobre Web API

Vimos o que é uma Web API, onde ela é usada e sua importância para o desenvolvimento mobile.
Considerando o conteúdo abordado, marque as alternativas verdadeiras:

Selecione 2 alternativas

Uma API pode mudar o dia a dia da empresa, agregando simplicidade, agilidade e automação aos sistemas.
 
Alternativa correta!
A API separa as mais diversas aplicações que uma empresa pode ter, permitindo que diferentes times trabalhem em áreas ou tecnologias diferentes interagindo entre eles por meio da API.
Alternativa correta
É uma biblioteca que só funciona no computador (localmente) e mais indicada para treinar e criar aplicativos iniciais.
 
Alternativa correta
As APIs podem ser utilizadas de diversas maneiras, integrando diferentes sistemas para maior eficiência na hora do uso, e têm uma função estratégica na rotina das empresas. Já que existem diversos sistemas e aplicativos usados em um negócio e todos esses recursos interagem com outros softwares, via APIs.
 
Alternativa correta!
Muito bom! Parabéns!!
Alternativa correta
As APIs são um serviço que funciona apenas de forma online, permitindo a comunicação direta com um banco de dados.

@@05
Fake API vs API

[00:00] Agora que entendemos o que é uma Web API e porque vamos utilizar neste curso, vamos entender a diferença entre uma Fake API, e uma API normal. Nós não utilizaremos uma API pública nesse curso, porque pode ser que, quando você estiver fazendo esse curso, ela não esteja mais pública, não esteja mais online ou não esteja funcionando como deveria.
[00:20] Então, para não contar com fator sorte, nós vamos usar uma API que rode no nosso computador. Por que nós não vamos usar uma API de verdade no nosso computador e sim uma Fake API? O que é uma Fake API?

[00:34] Uma Fake API nada mais é do que uma simulação de uma API normal. Então se fizermos uma requisição, pedir os dados, em formato JSON, ela vai nos retornar o formato JSON como esperado. Também poderemos salvar, editar e até deletar informações, porém nós não vamos precisar nos preocupar com o código que está por trás de uma API.

[00:56] Uma coisa que nós não mostramos é: o que tem por trás de uma API? Só para você ter uma ideia, uma API tem todo um código de back-end. Isso aqui é um exemplo de uma API, onde temos uma rota, temos vários tratamentos e autenticações. Então esse curso não é focado em criar uma API. Para não gastarmos muito tempo fazendo isso, vamos usar algo que simule uma API, como ela deveria funcionar.

[01:19] Para isso, vamos utilizar uma biblioteca chamada JSON Server. Esse aqui é o GitHub, onde estão todas as informações e documentação dessa biblioteca. Como podemos ver aqui, ela vai nos retornar um JSON, igual uma API normal retornaria. Vamos ter a liberdade, além disso, de criar um arquivo com essas informações, poder modificar do jeito que nós queremos para que funcione bem nesse curso.

[01:50] Então nesse vídeo entendemos o que é uma Fake API e porque que vamos utilizá-la. No próximo vídeo vamos criar nossa Fake API e simular as requisições, ou seja, pedir dados, editar dados e salvar dados. Nos vemos na próxima.

https://github.com/typicode/json-server#getting-started

@@06
Preparando o ambiente: json-server

Agora que sabemos a diferença entre uma Web API e uma Fake API, é hora de criarmos a nossa Fake API.
Assim, vamos instalar do json-server, necessário para criar uma Fake API.

Para realizar a instalação, abra o terminal e digite o comando de instalação que se encontra no github oficial do json-server.

Atenção: lembre-se de usar o comando sudo na frente do “npm install” para que o json-server baixe corretamente.

A documentação do json-server também se encontra nesse github, aproveite para entender melhor como ela funciona e o que ela é capaz de fazer.

@@07
Preparando o ambiente: baixando o Insomnia

Antes de finalmente colocarmos a mão na massa, falta uma ferramenta: o Insomnia.
O Insomnia é um aplicativo que nos permite testar Web APIs e fazer vários tipos de requisições nelas. Ele é muito utilizado por diversos programadores, pois facilita os testes para saber se a Web API está funcionando direito e o que é retornado de resposta quando se faz a requisição.

Recomendamos que você baixe o Insomnia no site oficial - ele pode ser baixado na maioria dos sistemas operacionais - e teste as requisições, assim como feito em vídeo, para acompanhar melhor a aula e fixar o conteúdo.

Vamos lá?

https://insomnia.rest/download

@@08
Criando uma Fake API

[00:00] Agora que vimos o que é uma Fake API, vamos criar a nossa para testá-la? No GitHub, temos a documentação com a instrução de instalação e como criar o primeiro arquivo para poder executá-la.
[00:13] Então, para podermos instalar a Fake API "json-server" no nosso computador, precisaremos do Node instalado na sua máquina, feito isso, vamos copiar o código npm install -g json server. Vou copiar e abrir o terminal. No terminal, você vai ter que digitar, antes disso, sudo, para dar permissão de super usuário. Depois, vamos colar o código npm install -g json server e, ao clicar em “Enter”, ele pedirá sua senha. Por fim, o JSON Server vai ser instalado na sua máquina.

[00:48] Após a instalação do JSON Server, vamos ver como que começamos os primeiros passos para criar nossa Fake API. Primeiro, criamos um arquivo chamado “db.json”. Para isso, vou abrir o meu VS Code e nele, vou criar esse arquivo. Para criar o arquivo, vou clicar nesse botão de “Criar novo arquivo” e vou digitar db.json.

[01:17] Feito isso, voltando aqui para a documentação, vamos copiar esse arquivo de exemplo que ele dá. Vou copiar, voltar para o VS Code e colar essas informações. Agora está salvo aqui o nosso “db.json”.

[01:33] Para podermos executá-lo, na documentação é mostrado como fazer isso. Basta executar no terminal o comando json-server --watch db.json. Vou copiá-lo, voltar para o nosso VS Code e, no terminal, vou colar esse comando, ao clicar no “Enter” já temos a nossa Fake API funcionando como se fosse uma API normal.

[01:58] Ele oferece aqui algumas URLs que podemos testar. Vamos copiar essa primeira e abrir no nosso próprio navegador para ver o que que acontece. Ao colar, ele nos retorna as informações que estão no nosso “db.json”, então temos o título, escrito JSON Server, e o autor, escrito type code. Vamos alterar esse autor só para você ver que ele realmente altera as informações aqui.

[02:27] Voltando para o VS Code, vou alterar o autor aqui para “André”. Ao salvar e voltar para o navegador, atualizamos a página e ele atualizou. Agora está escrito “André”.

[02:39] Dessa forma fica muito mais versátil para trabalharmos com uma Fake API e podermos modificar da forma o que gostaríamos para executar nesse curso. Porém, nós não queremos esses dados que estão na documentação, queremos os nossos dados para nossa aplicação.

[02:56] Então vou deixar como atividade para vocês um arquivo, que vai ter esse "db.json". No caso, eu já tenho esse arquivo, sendo assim, vou copiá-lo e vou colar no nosso “db.json”. Feito isso, teremos os usuários que vão ter o login, o ID, uma foto, um nome, e-mail, quantas pessoas seguem e quantos seguidores.

[03:21] Portanto, aqui temos dois usuários e temos os repositórios, que são os projetos que cada usuário criou ao longo do trabalho na Alura. Vamos executar para ver se esses dados estão realmente aparecendo? Se voltarmos para o nosso navegador e dar um “F5”, ele não retornou nada, por quê? Porque a nossa rota mudou. Agora temos que passar users, ou seja, localhost:3000/users, porque são os usuários. Então clicamos no “Enter” e, agora sim, temos as informações dos nossos usuários.

[03:56] Mas nós fizemos apenas leitura das informações, como que fazemos para enviarmos uma informação, editar, ou deletá-la? Para isso vamos precisar usar um programa, no caso, vamos utilizar é o Insomnia, que não é o único programa que faz isso, mas nesse curso nós vamos utilizá-lo.

[04:18] Então essa daqui é a página de download do Insomnia, cujo link estará disponível em atividades, assim como o link da documentação do JSON Server. Na minha máquina, eu já instalei o Insomnia, mas você vai clicar aqui no “Download”, vai baixar e instalar normalmente.

[04:34] Feita a instalação do Insomnia, vamos abrir o aplicativo. Dentro do aplicativo, o que temos? Vamos ampliar essa tela e analisar um pouco. Temos no canto superior direito, algumas configurações. Na coluna do lado esquerdo é onde vamos criar as nossas rotas, que são as requisições que faremos para API. Então, se quisermos uma rota para ler um dado, criaremos uma rota, se quisermos uma rota para editar um dado, criaremos outra rota.

[05:04] Vamos começar com básico, que já fizemos no navegador, mas vamos fazer no Insomnia, que é ler um dado. Para criarmos uma nova requisição, vamos clicar no botão "+", na parte de cima da coluna da esquerda, abaixo de "Cookies". Depois clicaremos em “New request”, abrindo uma nova janela flutuante, onde podemos digitar o nome da requisição. Vamos chamá-la de users, porque são os usuários. Ao lado direito do campo onde digitamos o nome, temos um menu de opções de requisição, no qual está selecionado a requisição que faremos para API.

[05:28] Lembram do CRUD, onde podíamos criar a requisição, editar, atualizar ou deletar? Então, para você fazer uma leitura, fazemos uma GET, que é de "pegar". Se formos criar alguma coisa, usamos o POST. O PUT é para atualizar, e o DELETE para deletar. No caso, queremos fazer um GET, então vou clicar em "Create", no canto inferior direito da janela.

[05:50] Voltamos para a janela anterior e, na parte superior da coluna da direita, tem uma barra de endereços onde colocamos a URL da nossa Fake API. Então vou copiar a URL da Fake API, que temos no nosso navegador, e colar no nosso Insomnia. Ao clicar em “Send”, ao final desse campo, ele vai nos retornar as informações em uma nova coluna à direita, igual retornou lá na página web.

[06:12] Se eu passasse uma rota que não existe, por exemplo, vou passar uma rota aqui, digitando “123” ao invés de "users", e clicar em Send. Ele vai devolver um “404 Not Found” ao lado do botão "Send", porque ele não encontrou essa rota. A nossa API não tem essa rota, então ele não retorna nada, retorna até um erro. Se tudo ocorrer bem, ele retorna “200 OK”, informando que está “ok”, e as informações em uma coluna que ele abre no lado direito da janela.

[06:36] E se quisermos retornar apenas um usuário, e não dois, como que fazemos? Criaremos uma nova rota. Vou chamar agora de "user". Aqui é um usuário, também vai ser do tipo GET. Após criarmos a nova requisição, vou colocar a nossa URL da Fake API na barra de endereço da parte superior central e clicamos em "Send" ao final dessa barra. Novamente, ele pegou todo mundo, mas eu quero pegar um usuário. Então eu posso passar o ID do usuário. Lembram que o ID é uma coisa única, então, se passarmos /1 ao final do link na barra de endereços, ele vai pegar o usuário de ID 1. Ao clicarmos em "Send", ele realmente retornou o “André”. Se eu passar /2, ele retorna as informações da "Natália".

[07:22] Agora vamos criar uma nova informação. Para isso, vamos de novo em “New request” e, agora, queremos criar um novo usuário. Então vamos chamar de "user" de novo, não tem problema, só que agora é uma rota do tipo POST, porque queremos criar uma nova informação. Lembrem que as informações chegam no formato JSON, então também temos que enviar no formato JSON.

[07:46] Então, no lado direito ao menu de requisições, surgiu um novo menu, onde vamos selecionar, para o corpo, um JSON. Vamos clicar em “Create” e, dentro da coluna central, escreveremos as informações desse novo usuário. Eu vou aproveitar que já tenho essas informações no retorno do "GET user" e vou copiá-las. Se quiser, pode fazer o mesmo, eu aconselho. Vamos colar essas informações aqui em "POST", só que vamos passar novas informações, "login": "usuario teste", aqui em name eu vou só mudar para "name": "Teste", no e-mail também vou colocar "email": “teste@email”, e o resto eu vou deixar igual, tirando o ID. Por que eu vou tirar o ID? Porque a nossa API ela vai criar um ID automático para o usuário.

[08:30] Lembrando que temos que colocar a URL da nossa Fake API, "http://localhost:3000/users", na barra de endereços na parte superior dessa coluna. Não esqueça disso. Vou copiar ela do "GET" também, só que a URL não vai terminar com “2”, porque queremos criar um usuário. Então passamos apenas o “/users” e, ao clicarmos em “Send”, ele criou um novo usuário para nós. Agora se quisermos ter todos os usuários vou fazer um "GET users" de novo aqui. Temos o usuário teste criado com ID 3.

[09:04] Vamos atualizar esse usuário? Para facilitar nossa vida, eu só vou clicar com o botão direito em cima de "POST user" e selecionar duplicate no menu flutuante que abre. Uma janela flutuante é aberta e vamos criar uma nova requisição. Aqui vamos criar o usuário, então vamos escrever, “criar usuario”, vou clicar em “Create” no canto inferior direito da janela.

[09:26] O método não será POST, porque queremos atualizar, então vamos renomeá-lo. Para isso, clicamos em "criar usuario" com o botão direito do mouse e selecionamos “Settings”. Uma nova janela se abre e vamos mudar o nome para "atualizar usuário". Em seguida, fechamos a janela, pressionando o "x" no canto superior direito. Para atualizar vamos usar o método "PUT", então, na parte superior da coluna central, vamos mudar o método clicando em "POST", no lado esquerdo da barra de lendeaços. Um menu irá se abrir e vamos selecionar "PUT".

[09:51] Só que, como vamos atualizar um usuário, temos que informar qual usuário temos que atualizar. Então, na rota, ou seja, na barra de endereços, vamos passar o ID do usuário, que é "/3". No texto da coluna central, vamos mudar o nome. Vou escrever “ANDRE TESTE” e, ao clicar em “Send”, ele atualizou as informações. Deu status “200 OK”. Se fizermos um GET dos usuários novamente e olhar o último, notamos que ele atualizou o campo “nome”.

[10:24] Então já criamos rota para ler informações, criar um novo usuário e atualizar um usuário, falta agora finalizar deletando um usuário. Vamos criar essa rota? Então vamos clicar novamente em "+" e "New Request". Vou chamar de “deletar usuario” e o método vai ser delete.

[10:47] A única coisa que teremos que passar é a rota com o ID do usuário que queremos deletar. Então vou copiar a rota do POST que fizemos e o usuário que eu quero deletar é o último que eu criei, então "http://localhost:3000/users/3". Ao clicar em “Send”, ele retornou “200 OK”. Quer dizer que a nossa requisição de deletar o usuário funcionou. Se fizermos um GET dos usuários, veremos que só tem o André e a Natália, o “ANDRE TESTE” foi apagado.

[11:20] Aqui nós fizemos o CRUD completo com a nossa Fake API, e as informações que fomos salvando e atualizando, conseguimos ver pelo Insomnia. Nos próximos vídeos vamos descobrir como fazer exatamente isso no nosso aplicativo. Até lá.

@@09
Sobre o Insomnia

Vimos sobre o Insomnia e sua importância no desenvolvimento de uma aplicação.
Sobre o Insomnia, marque as alternativas verdadeiras:

É um aplicativo para computador, muito utilizado por DEVs, para fazer requisições em Web APIs, podendo testar as rotas e ver o resultado que cada chamada da API retorna.
 
Alternativa correta!
Muito bom! O Insomnia ajuda muito no desenvolvimento de Apps, pois nos permite testar se uma API está funcionando como esperado antes mesmo de implementá-la nas nossas aplicações.
Alternativa correta
É a única forma de fazer uma requisição para uma Web API.
 
Alternativa correta
Só é possível usar o Insomnia no macOS.
 
Alternativa correta
Normalmente, antes de começar a fazer integrações da Web API em nossas aplicações, é importante testar as requisições na Web API para ver se todas as rotas estão funcionando como deveriam funcionar.
 
Alternativa correta!
Excelente! É isso mesmo, parabéns!

@@10
Para saber mais: Json-viewer

Se você quiser utilizar a extensão que melhora a visualização da Web API, mostrando os dados em uma cor diferente, baixe a extensão clicando aqui.

https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR

@@11
Faça como eu fiz: criando a Fake API

Vimos, na Aula 1, como criar uma Fake API usando o json-server. Segundo a documentação oficial do json-server, para criar uma fake API, siga os passos a seguir:
Passo 1): Instale a biblioteca na sua máquina com o comando no terminal:

npm install -g json-serverCOPIAR CÓDIGO
Passo 2): Crie um arquivo com o nome db.json e adicione algum conteúdo dentro dele, por exemplo:

{
  "users": [
    {
      "login": "andreocunha",
      "id": 1,
      "avatar_url": "https://avatars.githubusercontent.com/u/54721131?v=4",
      "name": "André Oliveira Cunha",
      "email": "andre@email.com",
      "followers": 43,
      "following": 54
    },
    {
      "login": "nataliakt",
      "id": 2,
      "avatar_url": "https://avatars.githubusercontent.com/u/9091491?v=4",
      "name": "Natalia Kelim Thiel",
      "email": "natalia@email.com",
      "followers": 51,
      "following": 7
    }
  ],
  "repos": [
    {
      "id": 2,
      "name": "api-escolas",
      "data": "1 de jan. de 2021",
      "postId": 1
    },
    {
      "id": 3,
      "name": "Arduino_AVES_Telemetria",
      "data": "1 de jan. de 2021",
      "postId": 1
    },
    {
      "id": 4,
      "name": "bot_piano_tiles",
      "data": "1 de jan. de 2021",
      "postId": 1
    },
    {
      "id": 1,
      "name": "2048evolution",
      "data": "1 de jan. de 2021",
      "postId": 2
    },
    {
      "id": 2,
      "name": "alura-pikachu",
      "data": "1 de jan. de 2021",
      "postId": 2
    },
    {
      "id": 3,
      "name": "alura-react-native-comecando-do-zero",
      "data": "1 de jan. de 2021",
      "postId": 2
    },
    {
      "id": 5,
      "name": "Alura_cursos",
      "data": "1 de jan. de 2021",
      "postId": 1
    }
  ]
}COPIAR CÓDIGO
Ou baixe o arquivo completo aqui.

Passo 3): Execute o seguinte comando no terminal:

json-server --watch db.jsonCOPIAR CÓDIGO
Então, assim como fizemos em vídeo, tente criar sua própria Fake API e fazer requisições nela com o Insomnia. Tente fazer o CRUD nessa Fake API, ou seja, fazer um GET, POST, PUT e DELETE.

https://github.com/typicode/json-server

Boa sorte! Assim que fizer, compartilhe com a gente nos fóruns! Conte com a gente se tiver dúvidas ou precisar de ajuda. ;)
Bons estudos

@@12
O que aprendemos?

Nesta aula, aprendemos sobre:
O que é uma Web API e por que utilizar:
Uma Web API é um serviço que conecta um aplicativo a um banco de dados, permitindo fazer requisições para ler, criar, editar e apagar informações.
O que é uma Fake API e por que utilizar:
Uma Fake API é uma forma utilizada para simular uma Web API real. A grande diferença é que as informações são salvas localmente e as rotas de requisições já são pré-definidas, como o GET, POST, PUT, DELETE e entre outras. Existem maneiras diferentes de fazer uma Fake API e uma delas é usar a biblioteca json-server. Uma Fake API agiliza o processo de simular uma aplicação com uma Web API, facilitando os testes iniciais da criação de um App.
O que é o Insomnia e por que utilizar:
O Insomnia é muito utilizado por pessoas desenvolvedoras para testar requisições e verificar se uma Web API está funcionando bem. Nele é possível testar todos os tipos de requisições, incluindo o CRUD (criar, ler, atualizar e deletar).
A seguir, vamos entender melhor como implementar uma Web API com um projeto chamado AluraHub.

Vamos lá?

#### 03/01/2024

@02-Configurando a Web API

@@01
Preparando o ambiente: configurando o Expo

Agora que você aprendeu os fundamentos sobre Web APIs, é hora de aplicar tudo isso em um projeto!
O AluraHub será o aplicativo que vai nos auxiliar em nossos estudos, e foi construído no React Native Expo.

Caso você não tenha o Expo instalado, separamos um artigo para você fazer a instalação de forma descomplicada. Para acessá-lo, clique aqui.

Bons estudos!

https://www.alura.com.br/artigos/como-instalar-configurar-expo-do-react-native?utm_source=gnarus&utm_medium=timeline&_gl=1*iocmg*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwNDMyMDk5OC4xNTEuMS4xNzA0MzIxMDcwLjAuMC4w*_fplc*UnhKRTJvQWglMkZ6bG1LNmlqcGNZVDYlMkYyUWRDYzNXYjlkV1paUUE5Qklhb0Z1ZFBDZEgxdjJ1SFBDOVFEeEV4d0doRjN5MGw3aUFWWHglMkZyNHRsbEJMZmdYaVVWbmlGVTJxUUtHaiUyRkNKbE05YURmRUFBM0pTVzQ2YXNDV0U1bnclM0QlM0Q.

@@02
Baixando o projeto

Baixando o código no Git
Para acompanhar o curso, baixe o projeto base do AluraHub, clicando aqui.

Na página do git, clique no botão “Code” e selecione a opção “Download ZIP” para baixar o projeto.

Recomendamos que teste o projeto e veja se ele apresenta os comportamentos esperados.

Depois de baixar o projeto e testá-lo, é possível prosseguir no curso.

Baixando o design no Figma
Se você quiser, pode conferir também o design do projeto feito no Figma, clicando aqui.

Para baixar o design, é necessário ter uma conta no Figma. Caso você não tenha, pode logar rapidamente com uma conta Google. Uma vez logado, acesse o nome do projeto no menu inferior e selecione a opção “Duplicate to your drafts”.

Vamos lá?

https://www.figma.com/file/xEHiFcNLsIEKdostk64RRZ/Ficando-Online---Design?node-id=0%3A1

@@03
Instalando o projeto

[00:00] Vimos bastante sobre Web API e Fake API, mas e o nosso projeto? Vejamos como vai ser o nosso aplicativo? O foco desse curso é consumir uma Web API com React Native. Pensando nisso, não criaremos o aplicativo do zero, será fornecido para nós o mockup e o projeto base dele.
[00:20] O mockup é isso que vocês estão vendo aqui na tela, nada mais são do que vários prints, várias capturas de tela, que o nosso aplicativo terá. Ele foi feito por um designer, então quem projetou e construiu o aplicativo base do nosso projeto, se baseou exatamente nesse mockup.

Imagem das quatro telas do aplicativo. A primeira tela é a de principal com o perfil do usuário, a segunda tela é a da lista de repositórios, a terceira é a tela de criação de repositório no aplicativo e a quarta tela é a onde as informações do repositório podem ser editadas.

[00:38] Aqui podemos perceber que temos a tela principal, que vai mostrar as informações de usuário, os repositórios, criar um repositório e até salvar e editar um repositório. Lembrando que a nossa aplicação tem como objetivo verificar se os usuários da plataforma da Alura podem editar informações deles e criar um repositório novo. Nós fomos contratados exatamente para isso.

[01:05] Muitas vezes quando entramos em um projeto, ou uma empresa, nós não pegamos o projeto do zero, ou seja, não construímos ele lá do começo mesmo, criando as telas dos componentes. Nós já pegamos um projeto de andando, cuja base já foi construída, e a partir da base nós implementamos funcionalidades. No nosso caso, nossa missão é implementar as funcionalidades de buscar, editar, deletar e até criar dados novos.

[01:31] Então será disponibilizado, em atividades, o link para vocês poderem baixar, do GitHub, o projeto. Vocês vão poder baixar o zip, descompactar no computador de vocês e aqui está todo o projeto, com os arquivos do projeto base. No terminal, vocês vão poder também instalar as dependências que o projeto necessita, só rodar um npm install e ele vai baixar todos os pacotes necessários de bibliotecas que esse projeto vai utilizar. Feito isso, vocês poderão rodar a aplicação para testar. Digitando expo start ou npm start, a aplicação será rodada.

[02:09] Um ponto importante, nesse curso vamos utilizar o Expo. Como a ideia aqui é utilizar Web API, ele vai funcionar da mesma forma que se eu usasse com o React Native CLI. Para facilitar nossa vida e não ter que ficar configurando o ambiente do React Native, vamos usar o Expo, que já vai abstrair muita coisa e facilitar para nós. Porém, funcionaria da mesma forma consumir uma Web API com os dois tipos.

[02:35] Com a aplicação rodando, vocês vão poder executar no simulador no emulador, ou até mesmo escanear no próprio celular para poder executar. Então o projeto base tem exatamente essa cara. Percebemos que a busca ainda não funciona, é só tudo estático, mas conseguimos navegar entre as telas. Podemos ir para tela que mostra os repositórios, porque não temos nenhum aqui, vamos poder criar um novo repositório e por aí vai.

Aplicativo rodando no emulador com a tela "Criar repositório" aberta.

[03:03] Nos próximos vídeos, vamos entender mais como que está o código base, que foi fornecido para nós, e implementar o consumo da Web API nessa aplicação. Até lá.

@@04
Entendendo o projeto

[00:00] Agora que já baixamos e instalamos as dependências do nosso projeto, vamos entender como que está o código por trás dele? Começando no nosso arquivo “app.js”, que está na coluna da esquerda. Nesse arquivo principal da aplicação, percebemos que está ocorrendo a importação das rotas que estão vindo lá da pasta “src”.
[00:21] Então vamos abrir esse arquivo. Acessando, na coluna da esquerda "scr > rotas.js", percebemos que foi feita a configuração do React Navigation, tal qual explicado no curso sobre navegação de telas. Aqui temos a importação das quatro telas na nossa aplicação: a tela principal, a de repositórios, a tela para criar um repositório, e a de informações do repositório.

[00:46] Retornamos da nossa rota essas quatro telas, então, como percebemos, aqui em Rotas() está a importação de cada tela. Vamos ver então o que tem em cada tela. Acessando "src > paginas > Principal", percebemos dois arquivos. Um arquivo de “estilo.js”, que vai conter todo o CSS daquela página, e o arquivo “index.js”, que vai conter o código. Esse código principal é a estrutura da nossa página principal. Nós percebemos que foram criadas aqui duas variáveis que, por enquanto, não estão sendo utilizadas. Basicamente temos várias views e textos aqui para exibir. É exatamente essa tela que está rodando no simulador.

[01:30] Então nós temos a imagem sendo exibida e temos o texto informando nome do usuário. Posso até mudar aqui para testarmos. Vou escrever aqui “ANDRE”. Agora está escrito "ANDRE" no aplicativo, onde era "Nome do usuário". Temos aqui o e-mail do usuário, que é o campo onde vai estar o e-mail, o número de seguidores, 30, o número de pessoas seguindo o André que são 40 e, embaixo, nós temos nosso botão aqui de “Busca”, para ver os repositórios. Na verdade, é um link, é o que está escrito aqui, ver repositórios, se clicarmos aqui nós vamos navegar para uma outra tela, já vamos clicar.

[02:15] Embaixo dele temos um TextInput que é um novo componente. Ao longo desse curso vamos ver como que ele funciona, como que podemos utilizá-lo para, ao digitar alguma coisa dentro desse campo, como “ANDRE”, pegarmos essa informação que foi digitada e usar para alguma coisa. Também temos o botão de “Busca” aqui, que por enquanto não faz nada.

[02:37] Então vamos lá. Clicando aqui em "Ver os repositórios", que também é um botão, podemos navegar para tela de repositórios. Indo para tela de repositórios, clicando na pasta “Repositorios”, na coluna da esquerda, percebemos que também é um código, que não tem muita coisa. Nós temos uma view envolvendo a tela inteira e temos um texto aqui que vai informar quantos repositórios foram criados.

[03:02] No caso, o que ele está pegando aqui? Ele pegou essa variável "repo", que foi criada aqui no começo, e pegou o tamanho dela repo.length. Como é um array vazio, o tamanho é 0. Por isso que está sendo exibido "0 repositórios criados" na tela do aplicativo. Embaixo dele temos um botão com o texto “Adicionar novo repositório”. Ao clicar nesse botão, navegamos para uma terceira tela, que é a tela de criar um repositório.

[03:30] Então vamos para pasta “Criar repositório”, na coluna da esquerda. Novamente temos aqui duas variáveis criadas que ainda não estão sendo usadas na tela. Temos a nossa view principal, que envolve a tela toda, temos a importação de dois TextInput, que são esses campos onde poderemos digitar alguma coisa, e o botão “Criar”, para poder criar um novo repositório que, por enquanto, também não tem efeito nenhum.

[04:04] Por fim, uma tela que está faltando é a de informação de repositório. Percebemos que ela é bem parecida com essa de “Criar um novo repositório”. Nós temos dois TextInput, temos um botão “Salvar”, para salvar, e um botão “Deletar”, para poder deletar um repositório.

[04:23] Com isso nós passamos por todas as telas e todos os códigos da nossa aplicação. Agora que entendemos melhor como que ela foi estruturada e como que já estão setadas as variáveis, nos próximos vídeos vamos de fato configurar nossa Fake API e integrar dentro do código dessa aplicação que acabamos de ver. Até lá.

@@05
Download do Axios

Ao longo deste curso, vamos utilizar o Axios como uma ferramenta para fazer as requisições na nossa Fake API dentro do React Native. A documentação oficial se encontra aqui.
Recomendamos que você acesse a documentação do Axios, pois ela ensina o passo a passo para baixar e usar os comandos básicos, que também vamos aprender.

É essencial instalar o Axios antes de prosseguir para a. :)

Para acessar a documentação da ferramenta, clique aqui!

https://github.com/axios/axios

https://github.com/axios/axios

@@06
Configurando a API no app

[00:00] Agora que entendemos o código por trás da nossa aplicação, vamos fazer nossa primeira requisição do nosso aplicativo.
[00:08] Existem várias formas de fazer uma requisição para uma Web API com o React Native. Porém as duas formas mais utilizadas e mais conhecidas, são usando o fetch, que é um próprio serviço do JavaScript, que permite conectar uma Web API e consumir os dados, seja fazendo um GET, um DELETE, um POST. Porém, neste curso vamos utilizar uma biblioteca externa, chamada Axios. A vantagem do Axios em relação ao fetch, é que o Axios vai facilitar para nós a resposta que a API vai retornar.

[00:37] Lembrem que quando usamos um Insomnia e fizemos um GET dos usuários, e o que foi nos retornado era um JSON com os campos nome e data. O fetch não vai retornar imediatamente esse JSON. Teríamos que tratar esses dados para que, no final, ele retornasse dessa forma.

[00:56] Já o Axios fará exatamente isso. Vamos fazer um GET e ele vai nos retornar esse JSON. Outra vantagem do Axios é no tratamento dos erros. Sabe quando você acessa uma página web e retorna “erro 404”, que não foi possível acessar? O fetch não necessariamente vai retornar esse erro para nós. Teríamos que tratar até mostrar essa mensagem. Já o Axios vai retornar esse “erro 404” certo, então vai facilitar a identificação de ocorreu algum erro na requisição da web API.

[01:29] Dito isso, aqui temos a nossa documentação oficial do Axios. É um link do GitHub que será fornecido por meio de atividades. Aqui tem todo o processo de instalação, alguns exemplos, e como usar o Axios.

[01:44] O Axios ele pode ser usado além do React Native. Ele pode ser usado no React, por exemplo. Então aqui tem as instruções de instalação. Vamos segui-las, abrindo o nosso código e o terminal e instalando o Axios. Para isso vamos digitar npm install axios no terminal. Porém, vamos utilizar a mesma versão. Caso tenha uma versão futura, pode ser que a forma que passamos a requisição seja um pouco diferente, então, para evitar isso, vamos sempre utilizar a mesma versão do curso. Para digitar a versão, vamos digitar `@0.26.0` e clicar em “Enter”. Ele vai baixar a biblioteca do Axios e importar na nossa aplicação.

[02:29] Agora que temos o Axios instalado, vamos até fechar o terminal. Vamos criar uma pasta aqui dentro da pasta “src”, chamada “service”, ou serviço. Vamos criar aqui pasta “servicos” e dentro dela vamos criar um arquivo chamado “api.js”.

[02:52] Neste arquivo, vamos fazer a importação do Axios e conectar com a nossa Fake API. Então vamos fazer o import do Axios, escrevendo import axios from "axios";, agora que o Axios foi importado, vamos conectar com a nossa Web API. Para isso vamos criar uma variável chamada const api, e ela vai ser = axios.create, porque vamos criar a conexão aqui com a nossa aplicação. Abrimos os parênteses, abrimos chaves ({}) e, aqui dentro, vamos conectar com a URL da nossa Fake API.

[03:26] Para isso, digitamos baseURL: "" e vamos abrir uma string para colocarmos a nossa URL da Web API. Porém, quando rodamos a nossa Web API, ele rodava em localhost. Vamos abrir aqui o terminal só para ver a Web API. Rodávamos esse comando json-server --watch db.json, e isso nos fornecia o localhost, aqui na porta 3000, mas o localhost quer dizer que ele vai rodar apenas no computador. Então mesmo o dispositivo usando o emulador que está no computador, ele está emulando como se fosse um dispositivo fora do computador, como se fosse um celular na sua mão.

[04:14] Como ele não está, de fato, no seu computador, se ele tentar fazer uma requisição para o localhost, vai retornar um erro, porque ele não está no computador. Para contornar isso e fazer com que tanto seu dispositivo físico, se você estiver usando o aplicativo do Expo, lendo QR Code, ou emulador funcione para fazer requisição, vamos precisar achar o endereço IP da máquina e substituir do localhost. Isso permitirá que qualquer dispositivo na sua rede WiFi conecte no json-server.

[04:51] Então vamos achar aqui o nosso endereço IP desse computador. Uma forma simples de você fazer isso é abrindo o próprio site que abre o Expo quando você roda ele. Nele é fornecido o endereço IP da sua máquina, no meu caso aqui, é 192.168.15.43. Esse 19000 é a porta que está rodando a aplicação, não vamos nos preocupar com ele, apenas com esse começo.

[05:16] Então você vai conseguir achar o seu endereço IP dessa forma. Existem outras formas, mas esse aqui vai ser o mais simples que vamos usar aqui no curso. Abrindo o nosso terminal, vamos fazer com que o nosso Json Serve não rode mais em localhost, mas sim nesse endereço IP.

[05:33] Para isso, vamos rodar o mesmo comando, só que aqui depois do watch, vamos colocar --host, e o endereço IP que lemos aqui, 192.168.15.43. Clicando em “Enter”, ele vai retornar para nós. Ao invés de localhost na porta 3000, vai rodar o endereço IP na porta 3000. Se rodarmos essa aplicação de novo, seja no Insomnia ou no nosso navegador, veremos que vai funcionar da mesma forma, como se fosse localhost. Porém, agora os nossos dispositivos vão conseguir, de fato, se conectar com a nossa Web API.

[06:13] Vou deixar aqui nossa Web API rodando. Vou só minimizar o terminal e vamos voltar para o código do aplicativo. Então aqui na nossa baseURL, passaremos esse endereço IP que pegamos ”http://192.168.15.43:3000/”. Vamos colocar apenas a porta 3000, então vamos ter exatamente isso o seu endereço IP e 3000, que é a porta que está rodando o nosso Json Server.

[06:46] agora que criamos esse API, vamos exportá-lo. Então vamos dizer export default api;. Dessa forma, vamos conseguir acessar essa variável API em outras telas, como a tela principal, que é onde vamos fazer nossa primeira requisição nesse exato momento.

[07:05] Então vou deixar aqui do lado o nosso simulador e vamos salvar esse arquivo. Agora vamos abrir a nossa página principal, acessando "src > principal > index.js" e vamos fazer, no começo do código, a importação dessa API que conectamos aqui. Então vou fazer import api from '../../servicos/api';, pasta API.

[07:32] Vamos fazer a nossa primeira requisição com essa API. Para isso, antes do return, vamos criar uma função "busca". Então function Busca(){}. Dentro dessa busca, vamos fazer, de fato, uma busca na nossa API.

[07:55] Isso é muito simples, vamos escrever api.. Aqui ele já fornece alguns métodos para nós, e lembra, quando vamos consumir os dados usamos o GET, que é o tipo da requisição.

[08:07] Então vamos usar o api.get(''). Dentro do .get(), vamos passar o endereço, porque, lembrem, se colocarmos "/users", ele vai pegar os usuários, se colocarmos “/repo”, ele vai pegar os repositores. Então vamos escrever api.get('/users') para ele pegar os usuários.

[08:30] Feito isso, então vamos escrever .then, que quer dizer, depois que ele fez a requisição. O que que vai acontecer? Ele retorna uma resposta, que vamos chamar aqui de response => e será uma função, uma arrow function. Dessa forma, quando fizermos um {console.log()}, nós vamos poder exibir os dados desse response. Vamos digitar aqui response e, normalmente, os dados vêm como console.log(response.data). Então quer dizer que ele vai pegar a informação dos dados que chegou da nossa requisição.

[09:20] Para testarmos essa função, vamos fazer com que ao clicar nesse botão, independente do que está escrito aqui no nosso input, ele chame a função e exiba esses usuários. Então no nosso botão de “busca” vamos escrever onPress, quer dizer "ao apertar". Vamos chamar nossa função de busca. Existem várias formas de se fazer isso. Podemos criar uma arrow function aqui também assim: ={() => Busca()}. Ele funcionará da mesma forma. Para simplificar, podemos simplesmente digitar onPress={Busca}.

[10:05] Agora, para vermos o que que vai acontecer, vou abrir o meu terminal, já que usamos um console.log. Esse console que vai mostrar o resultado a ser exibido no nosso terminal. Então, abrindo aqui o terminal da nossa aplicação que está rodando, vamos agora apertar o botão de busca e ver o que vai acontecer. Ele nos retornou exatamente um array, que vai conter os objetos que terão os dados: vai ter a imagem, a URL da imagem, vai ter o e-mail, seguidores, o nome. Então nós acabamos de fazer nossa primeira requisição usando a aplicação com React Native.

[10:47] Podemos fazer algumas coisas para melhorar. Por exemplo, e se der algum erro? O que vai acontecer? Podemos, após esse parênteses do then(), podemos escrever .catch(). O catch quer dizer que irá capturar um erro. Então, dentro dos () vamos digitar (error =>{}). Ele também será uma arrow function, então novamente podemos fazer um console.log(error).

[11:25] Então se, por exemplo, tentarmos acessar uma rota que não existe, ele provavelmente vai cair no erro. Ele nos retornou aqui o “erro 404”, que tentou acessar uma rota da Web API que não existe. Dessa forma poderemos tratar vários erros e prevenir que a nossa aplicação quebre, deixando tudo0 bagunçado. Voltaremos para o ('users') e faremos uma requisição de novo. Os dados estão sendo exibidos corretamente.

[11:55] Nesse vídeo ficamos por aqui. No próximo vídeo vamos fazer uma busca pelo usuário, digitando o nome de login no campo, e retornaremos os dados só desse usuário. Nas próximas aulas, vamos aprender a fazer requisições dos repositórios, a editá-los e os apagar. Até lá.

@@07
Axios vs Fetch

Vimos que existem algumas formas de fazer requisições em uma Web API com o React Native, entre elas, usando o Axios e o Fetch.
Sobre eles, marque as alternativas corretas:

O Axios é uma biblioteca externa, que pode ser baixada e instalada em projetos React Native, por exemplo. O Axios já trata os dados que estão sendo recebidos, convertendo automaticamente para JSON. Por sua vez, no Fetch há um processo de duas etapas ao entregar dados JSON.
 
Boa! O Axios facilita a forma como fazemos as requisições nas Web APIs, seja na forma como o resultado vem (JSON) ou até mesmo no tratamento de erros de requisições.
Alternativa correta
Só é possível usar um dos dois métodos, Axios ou Fetch, em um projeto. Caso tente utilizar os dois no mesmo projeto, ocorrerá um erro.
 
Alternativa correta
O Fetch é um uma interface JavaScript que permite, sem precisar instalar nada externo, acessar e manipular APIs http, fazendo requisições nelas.
 
Exatamente! É possível fazer todos os tipos de requisições, utilizando o Fetch, sem precisar instalar nenhum

@@08
Para saber mais: Fetch

Como vimos, vamos fazer requisições com o Axios, pois é uma ferramenta mais simples, que dispensa a necessidade de códigos complexos de back-end e, portanto, é mais adequada para fins didáticos.
Se você quiser saber mais sobre o Fetch, recomendamos que leia este artigo sobre requisições feitas com Fetch.

https://www.alura.com.br/artigos/react-native-fazendo-requisicoes-fetch?_gl=1*k5my4p*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwNDMyMDk5OC4xNTEuMS4xNzA0MzIxODM1LjAuMC4w*_fplc*UnhKRTJvQWglMkZ6bG1LNmlqcGNZVDYlMkYyUWRDYzNXYjlkV1paUUE5Qklhb0Z1ZFBDZEgxdjJ1SFBDOVFEeEV4d0doRjN5MGw3aUFWWHglMkZyNHRsbEJMZmdYaVVWbmlGVTJxUUtHaiUyRkNKbE05YURmRUFBM0pTVzQ2YXNDV0U1bnclM0QlM0Q.

@@09
Faça como eu fiz: buscando dados

Nesta aula, configuramos o ambiente React Native para poder lidar com requisições com a nossa Fake API e fizemos uma requisição GET para testar o código.
Agora é sua vez! Configure seu ambiente, caso ainda não tenha feito isso, e implemente a possibilidade de fazer uma requisição GET para ver se o projeto funciona corretamente.

Precisando de ajuda ou tendo alguma dúvida, pergunte no fórum para que possamos te ajudar! Bons estudos ;)

Nesta atividade, os objetivos eram que você conseguisse: **1)** Configurar corretamente o seu ambiente (se não tivesse feito isso); **2)** Integrar a Fake Web API ao projeto; **3)** Implementar a funcionalidade de busca de informações no aplicativo AluraHub. Existem diversas formas de solucionar esses problemas. Veja a nossa sugestão abaixo e compare com o seu código, [clicando aqui](https://github.com/alura-cursos/react-native-ficando-online/tree/aula2).

https://github.com/alura-cursos/react-native-ficando-online/tree/aula2

@@10
O que aprendemos?

Nesta aula, vimos sobre:
O que é o projeto:
Nessa aula, entendemos melhor o código do app fornecido para esse curso, passando por cada tela e vendo os códigos nos arquivos.
Como configurar uma Web API no React Native:
Aprendemos a instalar o Axios e configurá-lo no projeto. Além disso, entendemos o porquê de usar o Axios ao invés do Fetch.
Como fazer uma requisição GET:
Fizemos a primeira requisição do CRUD, chamada GET, para buscar todas as informações com a Web API.
Logo mais, vamos começar a implementar mais requisições em React Native para a nossa Fake API.