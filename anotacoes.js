/* 
                ANOTAÇÕES DO PROJETO IGNEWS

    Nesse projeto eu removi a pasta style pois vou criar do zero, também removir o readme.
    vou remover também dentro da pasta public a favicon e a logo pois vou usar a do proprio projeto.
    Dentro de pages eu também posso deletar a pasta api pois não vou utilizar aqui.

    Dentro de pages fica a página principal do meu projeto que é index.js eu posso apagar todo o 
    jsx e deixar um Hello World, posso remover as importações também.

    Dentro de _app.js eu preciso também deletar o import do css pois eu deletei a pasta css inicial 
    preciso fazer isso para não da erro.

    PS- Quando rodamos o next utilizamos o conceito de server side rendering(SSR) por isso que se eu 
    desabilitar meu JS do navegador minha página ainda mostra o conteudo pois minha pagina roda dentro 
    de um servidor node.js do Next. Isso é um conceito importante do next e também fundamental para 
    utilizar em ranqueamento e mecanismos de busca do google.

    Eu criei uma pasta src e coloquei minha pasta pages dentro dela, importante saber que a pasta pages 
    não pode ser renomeada e só pode ficar ou na raiz do projeto ou dentro da pasta src. Isso é importante 
    por que cada pasta ou arquivo dentro de pages acaba virando uma rota dentro do next.

    PS- Aqui quando eu for fazer um export eu preciso usar o default.
    PS - Meu index.js é a principal página que vai ser carregada ou seja a pagina inicial do projeto.

                                ROTAS DO NEXT.JS

    Automaticamente cada arquivo que eu criar dentro da pasta pages vai virar uma rota dentro do Next 
    com ecessão do arquivo _app.js.

                                INSTALANDO O TYPESCRIPT
    
    Para instalar o typescript eu vou rodar o seguinte comando: também instala o typescriot react e node.
        npm add typescript @types/react @types/node -D

    Após fazer isso eu posso trocar o nome dos arquivos de js para tsx.
    Agora só rodar o projeto em modo de desenvolvimento npm run dev.

    Dentro de _app.jsx eu importei as propriedades que meu componente pode receber 
        import { AppProps } from "next/app";  
    Depois passei  AppProps assim posso saber as propriedades que estão tipadas ali. 
        
                import { AppProps } from "next/app";

                function MyApp({ Component, pageProps }: AppProps) {
                return <Component {...pageProps} />
                }

                export default MyApp


                        ESTILIZAÇÃO COM SASS

        Existe um problema que é por ex você estilizar um h1 de um componente e acabar 
        estilizando também h1 de varios outros componentes, e quando temos dezenas de 
        milhares de linhas de codigo isso se torna um problema. 

        Por isso existe uma estratégia no Css chamada SCOPED CSS o styled-components por ex 
        utiliza essa estratégia, que é um css nunca afetar outro componente, isso torna o css 
        escopado ou seja ele fica aplicado ao escopo de um unico componente.

        Porém em alguns casos mais simples da para utilizar outro meio sem ser o styled-component
        aqui vamos utilizar o css de forma mais nativa e vamos utilizar o SASS que é um  pré-processador 
        que cria sua estrutura com cascatas de estilos.

        Vou criar uma pasta chamada style e dentro dela vou criar um arquivo chamado home.module.css 
        eu utilizo o module para indicar que aquele arquivo é um scoped, vou importar esse css dentro de 
        index.css.

        Vou instalar o sass com o comando abaixo:
                npm add sass
        Após isso eu ao invés de utilizar a extensão css nos arquivos eu vou utilizar o scss


              
         
                IMPORTANTE 

                        _app.tsx e _document.tsx

        Se eu quiser que algo se repita em todas as páginas eu colodo dentro do _app.tsx porém sempre 
        que uma página for carregada o _app também será 

        O _document funciona de forma semelhante ao app porém ele é carregado apenas uma única vez 
        na aplicação.

        Vou dentro de pages e cou criar o arquivo chamado _document.tsx vou exportar por padrão e 
        vou escrever esse componente em formato de classe chamado MyDocument dentro vou ter um 
        render e dentro um return, vou importar o Document de dentro do Next e vou utilizar um 
        extends passando esse Document para meu componente, após isso eu coloco algumas coisas padrões do 
        html dentro, porem vou substituir algumas tags por tags do document do next veja:

                                import Document, { Html, Head, Main, NextScript} from "next/document";

                                export default class MyDocument extends Document {
                                render() {
                                        return (
                                        <Html lang="pt-br">
                                                <Head>
                                                <title>Document</title>
                                                </Head>
                                                <body>
                                                <Main />
                                                <NextScript />
                                                </body>
                                        </Html>
                                        )
                                }
                                }

        Pronto com isso por exemplo eu posso colocar um titulo que vai refletir em todas as páginas na aba superior 
        como o nome da aplicação.


                        CONFIGURANDO FONTE EXTERNA

        Vou procurar a font do google fonts, copior o link e colo dentro do meu Head dentro de _document.tsx 
        se der erro é por que tem que fechar as tags.

                        
                        TITLE DINAMICO POR PÁGINA

        
        Dessa forma que eu fiz com o titulo da página todas as páginas vão ficar com o mesmo titulo, para fazer de forma dinamica 
        eu devo fazer o seguinte, vou tirar a tag title de dentro do meu _document.tsx.
        e dentro da página onde eu quero meu title eu devo importar o Head de dentro do next e utiliza-lo como um componente 
        passando o meu title veja:

                                import Head from "next/head";

                                <Head>
                                        <title>Início | ig.news</title>
                                </Head>


                        
                        ESTILOS GLOBAIS DO APP

        Dentro de style eu vou criar um arquivo global.scss e note que não coloquei o module pois 
        eu vou utilizar esse arquivo para fazer estilos gobais na minha aplicação.

        O meu global.scss eu importo dentro do meu app.tsx


                                COMPONENTE HEADER 

        Dentro de src eu criei a pasta components, dentro dessa pasta eu vou criar uma pasta para meu 
        componente Header e dentro dela eu criei um arquivo index.tsx e styles.module.css.
        PS- Dentro desse componente eu não preciso exportar por default isso é obrigatório dentro do next
        apenas dentro das páginas.

        PS- Eu vou utilizar a tag header no html por que eu preciso ter a bordinha que vai ocupar todo o espaço 
        dentro do meu header, a div colocada no meio é a dív que vai ficar em volta do conteudo do header e essa 
        precisa ficar alinhada ao centro com uma largura máxima. 

        A pasta images com as imagens do projeto eu coloco dentro da pasta public junto ao favicon.

        PS- Dentro do next não precisamos fazer eo import da imagem diretamente no arquivo tsx basta colocar a / em seguida do 
        nome da pasta em que está a imagem e em seguida o arquivo.    <img src="/images/logo.svg" alt=""/>  

        Dentro do meu styles eu criar duas classes uma chamada  headerContainer e headerContent em seguida eu vou aplicar essas classes 
        ao meu componente , primeiro eu importo e em seguida eu chamo dentro do className.

                        import styles from "./styles.module.scss";       className={styles.headerContainer}

        Como o meu Header vai está disponivel em todas as páginas eu vou colocar ele dentro do meu _app.tsx

        Dica css:  

                                 & + a {
                                        margin-left: 2rem;
                                }

        Toda tag a que não for a promeira eu vou da um margin-left de 2rem ou seja 
        toda tag a que antes não tiver outra tag a.

        PS - Dentro do meu _document eu criei um link e passei o meu favicon.
                                <link rel="shortcut icon" href="/favicon.png" type="image/png" />


                        COMPONENTE SINGINBUTTON 
        
        Esse botão vai ser criado em um componente isolado e não dentro do meu componente header 
        por que esse botao tera estados diferentes, e que não tem haver com o header, com isso 
        eu separo meio que isso de dentro do meu header e tiro essas responsabilidades dele.

        Como o estado dele muda toda vez que o usuario estiver logado, o componente será renderizado 
        e com isso apenas ele será renderizado, por que eu o criei como um componente isolado. 
        
        Criei a pasta SingInButton para o meu componente e dentro dela criei meu index e meu styles.

        Vou instalar o pacote de icones do React 
                                npm add react-icons  

        Após instalar basta eu importar e depois chamar o icone desejado onde eu quero;
                                import { FaGithub } from "react-icons/fa"   

                               
                                colocando o botao a esquerda do meu header
        Vou colocar agora o meu button para a esquerda e vou utilizar um truque bem legal para isso 
        vou dentro do styles do meu Header após a tag nav eu vou chamar a tag button e vou dar um 
        margin-left: auto e ele vai ir o maximo para a esquerda. 

        Fiz dessa forma por que esse botao ele só precisa ir totalmente para a esquerda se ele estiver dentro 
        do header, se caso eu queira utilizar esse botão dentro de outro local da minha aplicação provavelmente 
        eu não vou querer colocar ele totalmente para a esquerda ou seja a estilização da margem desse botão 
        se aplica ao contexto em que ele está sendo utilizado, nesse caso é o header e é o header que vai definir 
        o posicionamento do button.

        Ps- Se eu colocar o border-radius com o mesmo valor que meu height ele vai arredondar o maximos possivel.
        PS utilizei o  svg:first-child para indicar que essa estilização só se aplique ao primeiro svg pois depois 
        vou utilizar outro no meu button.

        PS- eu utilizei o filter: brightness(0.8) no meu hover por que ele vai dá um efeito bem legal e também posso
        colocar um transition: filter 0.2s.

        PS - A cor do meu svg eu vou definr pelo meu html por que a cor irá mudar conforme o usuario logar no site

        Para definir essa condição do meu usuario está ou não logado eu vou criar uma variavel e vou chamar de isUserLoggedIn
        e vou passar por enquanto o valor true.

        Eu vou escrever isso como uma condição dentro do meu return do meu componente passando as duas situações.

                                return isUserLoggedIn ? (
                                        <button 
                                        type="button"
                                        className={styles.signInButton}
                                        >
                                        <FaGithub color="#04d361" />
                                        Danilo Amaral
                                        </button>
                                ) : (
                                        <button 
                                        type="button"
                                        className={styles.signInButton}
                                        >
                                        <FaGithub color="#eba417" />
                                        Sign in with Github
                                        </button>
                                );


        Também importei um novo incone chamado FiX que é um icone com um X para fechar, dentro desse icone eu criei uma classeName 
        para estilizar ele. 
        Na parte que o usuario está logado eu adicionei meu nome.
        consigo observar as duas situações modificando a minha variavel  isUserLoggedIn para true ou false.

                                       Página Home 
                                       
        Vou utilizar a tag main para todo o  meu conteudo da home , depois a tag section para colocar todo o meu conteudo a esquerda 
        depois da section eu vou colocar minha imagem com a tag img.

        Dentro do Section eu coloquei uma tag span para colocar minha mensagem hey welcome, o emoji  basta colocar no google emoji clapping 
        copiar e colar. 
        Logo abaixo do span eu coloco um h1 e escrevo meu texto, ainda dentro do meu h1 eu coloquei um span em volta da palavra react fiz isso 
        por que vou diferenciar na cor, em seguida eu escrevo meu paragrafo com a tag p coloquei uma tag br para forçar uma quebra de linha.

        Como eu estou escevendo dentro da minha página home eu vou criar aqui dentro da pasta pages mesmo um arquivo chamado home.module.scss 
        dentro da minha estilização eu definir que minha altura do contentContainer  é: 
                                        height: calc(100vh - 5rem); 
        isso significa que será a altura total da tela 100vh  mesno 5rem por que 5rem é a altura do meu header isso por que ele tem que ficar 
        centralizado verticalmente na tela descontando a altura do meu header por que eu preciso que ele fique a mesma distancia do meu header 
        e o fim da tela.

        Utilizei o justify-content: space-betewenn para ficar a imagem totalmente a esquerda e meu conteudo totalmente a direita.

        vou pegar apenas um nivel do span dentro do meu hero  ou  seja apenas vou estilizar o primeiro por isso eu utilizei o span um nivel
        > span  

                                                COMPONENTE SUBSCRIBEBUTTON  

        Eu criei o botao de insriçao , criei uma pasta chamada SubscribeButton e dentro dela eu criei um arquivo index e o arquivo styles
        dentro do meu componente eu criei um button e passei uma classeName subscribeButton.

        PS- é sempre o contexto de define o espaçamento do elemento , por exemplo se o elemento está em outro contexto de outro elemento 
        é sempre nesse outro elemento que definimos o espacamento.

        Ps- Por isso a margem a gente vai da dentro do home.module.css justamente devido a situação a cima mensionada.


                                                        Configurando o Stripe

        Agora vamos configurar o stripe e integrar a aplicação, é uma plataforma de pagamentos que permite os usuarios fazerem pagamentos 
        atraves de cartao, eles tem um ambiente de homologação muito rapido e simples, basta fazer um cadastro e criar um projeto.
        O Stripe também tem um API muito simples de ser utilizada.

         Eu criei o preço para o meu produto e vou em developer e vou pegar as chaves da API.

         A Publishable Key é uma chave que pode ser publica ela é utilizada para interagir com a api do stripe através do front end para 
         buscar informações que são publicas.

         A secret Key é uma chave secreta e o acesso a essa chave permite a pessoa fazer tudo que quiser na conta stripe, desde a fazer assinaturas 
         sem pagar até remover assinaturas. tem que ter muito cuidado nessa chave.

         Eu vou copiar a secret key, vou criar na raiz do projeto um arquivo chamado .env.local e dentro dele eu vou criar uma variavel de ambiente 
         chamada STRIPE_API_KEY e vou passar minha chave secreta para essa variavel.

         O arquivo .env.local é um arquivo para variaveis de ambiente.

         
                                                        CONSUMIENDO API DO STRIPE(SSR)

        Agora vamos fazer a chamada da api do stipe para obter as informações do produto criado, se eu fizer essa chamada como por ex faço no react 
        co useEffect essa chamada vai acontecer dentro do Browser e isso gera um problema nesse tipo de app que é uma mudança no layout que fica perceptivel 
        ao usuario.

        Vamos aplicar SSR para fazer chamadas http que no caso essa chamada vai acontecer ao inves de acontecer no Browser irá acontecer dentro so servidor node 
        do next.

        Devemos fazer esse tipo de chamada dentro de uma pagina do next e não em um componente pois esse tipo de chamada só vai funcionar na página.

        Dentro da minha página home eu vou exportar uma função chamada getServerSideProps e tem que ser exatamente esse nome, tem que ser uma função asincrona,
        escrevi ela em forma de const por que de dentro do next dá para importar um tipo para ela: 

                                        import { GetServerSideProps } from "next";  
        
                                        export const getServerSideProps: GetServerSideProps = async () => {

                                        }
        
        PS- tudo que eu retorno de dentro do meu getServerSideProps eu  posso acessar dentro do meu componente via props
        e todo codigo que eu colocar dentro dessa função ele não irá executar dentro do Browser e sim dentro do servidor 
        do next.

        Primeiro eu vou instalar o stripe ao projeto com o comando     npm add stripe

        Eu criei dentro da pasta src uma pasta services e dentro eu criei um arquivo chamado stripe.ts e esse arquivo é quem defini 
        a conexçao com a api do stripe.

        Dentro do meu arquivo eu importo o stripe que é uma sdk e com isso eu não preciso fazer todas as requisições através de http 
        poderia ser feito também porém dessa forma já dá para saber os metodos existentes, rotas. 

        Vou criar e exportar stripe e passar new Stripe , no primeiro paramtro eu utilizo process.env e passo a minha variavel de ambiente 
        do stripe, o segundo parametro são algumas infomações obrigatorias como a versão da api(apiVersion) em seguida eu vou colocar appInfo 
        que são informações de metadados como nome da aplicação (Com isso lá dentro do stripe conseguimos identificar qual aplicação está fazendo as requisiçoes)
        também colocamos a versão da aplicação, posso importar a versão de dentro do package.json e utilizar.

                                        import Stripe from "stripe";
                                        import { version } from "../../package.json";

                                        export const stripe = new Stripe(
                                                process.env.STRIPE_API_KEY,
                                        {
                                                apiVersion: '2020-08-27',
                                                appInfo: {
                                                name: 'Ignews',
                                                version
                                                }
                                        }
                                        )

        Após isso eu vou utilizar essa api dentro do meu componente home, para fazer uma requisição, eu peguei o preco e utilizei o await 
        e passo o stripe , para isso eu devo importar meu stripe de dentor da pasta services, vou selecionar prices e utilizar o retrieve 
        para buscar apenas um e vou passar dentro da strin o id da api do preco que eu criei lá no site so Stripe.
        Apos isso eu vou passar um segundo parametro chamado expand e dentro dele vou passar product, preciso disso por que quando eu vou buscar 
        os dados de um preço, e com isso também vou ter acesso a todas as informações do produto.

                                        const price = await stripe.prices.retrieve('price_1L3T6QDvkvWoc9GEtf7ozjXl', {
                                                expand: ['product']
                                        })

        PS- Uma dica para se trabalhar com precos é utilizar centavos pois isso ajuda a trabalhar com numeros inteiros  
        e evita decimais, note que eu dividir por 100.
                                                        const product = {
                                                                priceId: price.id,
                                                                amount: price.unit_amount / 100),
                                                        }


        No meu return eu vou retornar via props products. com isso eu posso pegar e acessar no componente   
                        export default function Home({ product })  

        Criei também uma interface e definir as propriedades de meu product.   
        
        Agora dentro do meu html onde eu coloquei o preco 9.90 eu posso substituir por {product.amount}

        Eu posso utilizar o Intl.NumberFormat para formatar o valor de amount.

        Agora eu vou precisar do priceId dentro do meu componente SubscribeButton e la dentro eu vou definir uma interface
        


                                                  Static Site Generation (SSG)
                                                  
        No next existe o SSG é um processo muito semelhante ao SSR porém a partir do momento que a pessoa acessou a aplicação e 
        todo o fluxo foi realizado, fez as chamadas api, gerou html , o next além de retornar esse html ao Browser ele irá salvar 
        esse html como um arquivo estatico ou seja ele cria um arquivo html statico que contém o resultado final gerado a partir 
        daquela tela, com isso quando a página for ser acessada novamente o next já tem salvo aquele conteudo estatico, com isso 
        ele retorna diretamente aquele html estatico diretamente para o Browser sem precisar fazer uma nova chamada api. 
        
        Para acessar esse recurso dentro do next basicamente a gente deve utilizar getStaticProps igual fiz nessa aplicaçao com o 
        getServerSideProps , vou fazer essa substituição na aplicação, o resto continua tudo igual não precisamos mudar nada alem disso.

        Agora eu posso utilizar o revalidate que é definir quando tempo em segundos eu quero que essa pagina passe para ser reconstruida.
                                                         revalidate: 60 * 60 * 24, // 24 hours
        60 simboliza um  minuto, 60 novamente para simbolizar uma hora, e 24 simboliza 1 dia.
        
        O SSG é mais performatico pois ele salva o conteudo html e não precisa ficar fazendo todas as chamadas do zero 
        O SSR permite ser mais dinamico 

        Um exemplo imaginte que dentro da aplicação seja necessário pegar a informação de um usuario que está logado para fazer uma chamada api 
         que é diferente por usuario nesse caso eu não consigo fazer com getStaticProps isso por que a partir do momento que ele gera  um html estatico 
         aquele mesmo html estatico será mostrado a todos os usuarios, com isso aprendemos que só podemos usar  o SSG em páginas que sejam estaticas 
         por que o conteudo será o mesmo para todo mundo que irá acessar a aplicação. 

         O SSR pode utilizar de informações dinamicas como por ex pegar dados do usuario logado. 

         PS- Existem 3 formas de fazer chamadas api aqui dentro  
         Client-side 
         Server-side
         Static site generation 

         O static site generation será usado para casos que conseguimos gerar o html de uma página para que ele seja compartilhado com todas aquelas pessoas 
         que estão acessando aquela aplicação,   exeplos  a home de um blog . o post de um blog, a página de um produto dentro de um ecomerce , essas páginas 
         precisam ser acessadas pelo publico em geral e precisam da indexação do google(SO). 
         
         O Server Side Rendering a gente usa também quando precisamos da indexação do google porém a gente precisa de dados dinamicos da sessão do usuario ou seja 
         informação em tempo real do usuario que está acessando, do contexto da requisição. 

         O Client-side  será utilizado em para os outros casos quando não é necessária indexação, quando uma informação é carregada atraves de alguma ação do usuario, 
         uma informação que não tenha a necessidade de não está ali.


                                        API ROUTES NO NEXT.JS 
                                        
                                        
        Existem operações que fazemos normalmente no back end da aplicação, aplicações com certo nível maior de segurança como autenticação, evio de emails, comunicação com 
        banco de dados, comunicação com serviçoes externos.  
        PS- A partir de um momento que  o código é executado pelo front end esse código nunca está seguro sempre vai ter a possibilidade dele ser visualizado por um usuario 
        externo com conhecimento. Por isso tem códigos que devem ficar no back end.

        Por isso sempre que for feita alguma operação no banco de dados por ex sempre é utilizado o back end.

                                                        back end

        O nexts tem recursos que permitem que em alguns momentos ou seja não substitui totalmente um back end, em alguns casos para algumas funcionalidades isoladas 
        ou em pequenos casos dá para fazer o back end dentro do next.
        Isso é possivel por causa do servidor node que o next possui. 

        Dentro de pages eu criei uma pasta chamada api, todos os arquivos que forem criados dentro de api automaticamente serão transformados em rotas
        do meu back end.

        Vou criar uma rota só de teste  e para isso eu vou criar um arquivo chamado user.ts
        dentro dele eu escrevo uma função  posso utilizar arow function, essa função sempre 
        recebe dois parametros request e response, o request é todos os dados eu recebo da 
        minha aplicação,  o response serve para trazer a resposta. 

                                export default (request, response) => {}

        Como estamos utilizando typeScript é importante tipar essa função e para isso devemos importar 
        de dentro do next o NextApiRequest e o NextApiResponse,  e depois eu tipo minha função.

                                import { NextApiRequest, NextApiResponse } from 'next';

                                export default (request: NextApiRequest, response: NextApiResponse) => {}

        E dentro dessa função que eu criei eu posso fazer qualquer operação que eu faria de dentro de um back end 
        normal em node.
        Para exemplificar eu criei uma listagem de usuarios simples e retornei uma resposta no formato json. 

        Eu consigo testar essa api colocando o nome da rota criada la no local host. PS- instalando a extensão JsonView 
        da para ver melhor formatado o json.

        Aqui foi feita uma rota puramente back end ou seja tudo isso foi feio na camada do next que roda entre o Browser 
        e o back end final da aplicação ou seja tudo que é executado nessa rota não fica acessivel no lado do cliente, o 
        Browser só vai ter acesso aos dados. Essa é uma das funcionalidades do next que trouxe o next para um outro patamar.

                                                        Serveless
        Todas essas apis roots que nos vimos todas elas são executadas utilizando o conceito de Serveless ou  seja 
        quando a aplicalçao passa pelo deploy(enviadas para produção) as rotas de dentro da pasta de api elas 
        não formam um servidor , toda vez que essa rota for chamada ele sobe um ambiente isolado e ele executa as  funções 
        e a partir do momento que ela executa a resposta o ambiente de execução serveless ele morre, ele não fica executando 
        um servidor 24h , ele só executa conforme vai acontecendo as chamadas.


                                                        ESTRATÉGIAS DE AUTENTICAÇÃO 

        Os metodos de autenticação dentro do nexts, umas das tecnicas bem comuns é utilizar um JWT dentro do Storage 
        da aplicação, geralmente esse JWT tem uma data de expiração,. 

        Outra estratégia bem comum é o Next Auth essa estratégia é utilizada quando queremos um sistema de autenticação 
        simples, principalmente um login social na aplicação ou seja um login com terceiro tipo google, git-hub,facebook 
        ou quelquer outro, a gente utiliza também essa estratégia quando não se quer ficar armazenando credenciais de acesso
        dentro do back end, essa estratégia é feita utilizando as proprias rotas api do next e por isso não precisa ser feita 
        no back end. É uma estratégia segura porém não utilizamos em todos os casos.
        
        PS- da uma lida na documentação do next que tem mais informações legais.

        Existem também as estratégias utilizando serviços externos como o Cognito da aws, entre outros como o Auth0, Firebase 
        e todos eles conseguimos integrar ao Next Auth.

        JWT (Storage)
        Next Auth (Social)
        Serviços externos: Cognito , Auth0, Firebase ...

        Nessa aplicação vai ser utilizado o Next Auth 

                                                        PORAMETRIZAÇÃO NAS ROTAS / ROTAS DINÂMICAS

        Vamos implementar autenticação utilizando o Next Auth na aplicação, existe um cenceito bem interessante dentro dos 
        conceitos de rotas da aplicação Next, que as vezes é a criação de rotas dinâmicas.
        Esse tipo de rota dinamica é quando queremos passar parametros nas rotas como por ex trazer um usuario 1 de users
        Para fazer isso por ex eu crio uma pasta chamada users, o arquivo users eu troco para index e jogo dentro da pasta 
        users e agora para eu criar uma outra rota buscando o usuario pelo id , eu crio um arquivo com [] e dentro dos colchetes 
        eu coloco o nome que eu qusier, e .tsx., também se eu utilizar o ... dentro do  meu colchetes por ex [...users].tsx 
        tudo que eu colocar na rota url depois de user  irá ser repassado para uma variavel chamada users. 

        Ps- ... spred operation

        Isso geralmente é utilizado para fazer integração com algo de terceiros, ex quando for feita a integração com autenticação
        o Nexts Auth utiliza esse mecanismo para fazer com que todas as chamadas para uma rota especifica da aplicação sempre 
        caiam dentro do contexto do Nexts Auth , com isso não é necessário criar vários arquivos. 

                                                        AUTENTICAÇÃO COM NEXT AUTH 

        Existe a documentação do NextAuth e da para fazer tranquilo seguindo ela.  https://next-auth.js.org/getting-started/example
        Dentro da parte de exemple code na documentação eu vejo que eu preciso criar o seguinte arquivo [...nextauth].ts 
        dentro de pages/api/auth, eu crio a pasta auth dentro desse caminho. 

        Após isso eu vou utilizar o mesmo código que é mostrado na documentação posso copiar e colar.

        Eu preciso também instalar o Next Auth com o comando   npm add next-auth  

        Como eu utilizo typeScript eu também devo importar as bibliotecas de tipagem com o comando 
                                npm add @types/next-auth -D   

        Esse exemplo que ele traz já é utilizando o git-hub e para fazer essa integraçao com o git-hub 
        é necessáro duas informações do git-hub o clientId e o clientSecret e para isso é necessário criar 
        uma aplicaçao dentro do git-hub para parte de autenticação. 

        Agora é preciso ir ao git-hub vou dentro das minhas configurações(Settings), vou em develope settings 
        e vou em OAuth Apps, vou em Registrar a nova aplicação, preencher as informações , e na parte de 
        Authorization callback URL devemos utilizar http://localhost:3000/api/auth/callback é importante utilizar 
        esse callback por que é o tipo de rota que criamos.

        é importante criar uma aplição por ambiente ou seja se vamos executar para dev é uma se for em produção é outra 
        aplicação que criamos no git-hub. 
        Dentro da nossa aplicação no git-hub vamos precisar pegar o client ID , copiar e colcar dentro do arquivo .env.local 
        eu crie a variavel de ambiente GITHUB_CLIENT_ID e passei  o meu client ID.

        Após isso eu volto na minha app no git-hub e gero minhas client secrets é importante copiar e colcar dentro de env local 
        assim que for gerada pois ela desaparece em seguida. criei uma variavel chamada GITHUB_CLIENT_SECRET 

        Feito isso temos as credenciais do git-hub client e secrets vamos passar essas variavels de ambiente dentro de [...nextauth].ts
        Após isso definimos o nosso escope que quer dizer quais informações do usuario eu quero ter acesso, dentro da documentação eu 
        consigo ver vários tipos de permissoes que podem ser configuradas de acesso ao git-hub do usuario, vou utilizar o read:user 
        por que só vai dar permissões basicas de usuario, vou passar dentro de scope. 

        PS- essa parte do escope mudou com a atualização e por isso ela já vem como padrão não precisa ser implementada, sua implementação 
        tbm mudou. 

        Agora eu vou dentro do meu componente SingInButton que é o componente que vai realizar a autenticação, devemos fazer a importaçao do 
        signIn  que é uma função que faz a autenticação do usuario.
                                                        import { signIn } from "next-auth/react";

        Depois dentro do meu button eu chamei um evento onClick que vai disparar essa função, o signIn vai receber como paramtro o tipo de 
        autenticação que queremos estamos utilizando.

        Agora eu posso mudar uma informação que eu tinha deixado de forma estatica para fins de visualização nesse trexo 
                                                        const isUserLoggedIn = true;

        Para isso eu vou importar um hook chamado useSession ele irá retornar informações se o usuario tem uma sessão ativa ou não;
                                                        import { signIn, useSession } from "next-auth/react"
        em seguida eu substituo o meu trexo que estava estático por:   const {data: session} = useSession()
        também vou substituir o isUserLoggedIn por session.

        Outra coisa que é necessária fazer é que todos ou parte dos componentes da aplicação precisa saber se o usuario está ou não 
        logado isso significa que todos os componentes precisam ter acesso a mesma informação, na maioria das vezes utilizaremos context api
        e o next-auth utilizar dos context para servir as informações. Por isso o  meu provider precisa está lá no meu componente raiz que é 
        o _app.tsx que é o componente que fica em volta de todas as páginas, com isso todas as páginas vão conseguir ter acesso a essa informação 
        se o usuario está logado ou não.

        Vou dentro do meu _app.tsx e vou importar o Provider como eu posso futuramente utilizar outros providers em minha aplicação eu vou renomear 
        o meu provider utilizando o as: 
                                     import { SessionProvider as NextAuthProvider } from "next-auth/react"; 
        Após isso eu posso substituir o meu fragment por  NextAuthProvider e dentro dela eu preciso passar uma propriedade 
        chamada session={pageProps.session}  
        
        Dentro de SingInButton eu posso dar um console.log em session para visualizar o valor dessa variavel sempre que ela mudar;

        Posso testar e já vai logar com o git-hub.

        Posso substituir o nome do meu botão que estava estático por  {session.user.name} com isso o nome sempre ficará o do usuario logado.

        Posso implementar no meu primeiro button um evento onclick para deslogar o usuario passando a função singOut lembre que devo  importar 
        o singOut para isso.



                                                        FaunaDB 

                                        Escolhendo um banco de dados 

        Vamos configurar a aplicação para se comunicar com um banco de dados, primeiramente essa aplicação é um tipo 
        de aplicação que não depende de um back end, isso por que estamos utilizando o conceito de apis routes do next
        isso é uma boa estratégia para aplicações menores.

        Nessa aplicação que está sendo construinda assim que o usuario logar na aplicação é preciso salvar algumas informaçoes 
        desse usuario dentro de um banco de dados, isso é necessário por que quando o usuario se inscrever no stripe 
        é necessário saber qual usuario se inscreveu no stripe, algum tipo de id desse usuario. 

        Nessa aplicação utilizamos o faunaDB que é um banco de dados feito principalmente para aplicações seveless 
        Todas as operações feitas dentro do FaunadB são feitas via HTTP , geralmente quando estamos utilizando um 
        back end escrito em seveless, como por ex as funções da api routes do next é interessante utilizar banco de dados 
        que não necessitem manter conexoes abertas para conseguir fazer as operacoes. 

        Geralmente utilizamos FaunaDB - HTTP ou DynamoDB - AWS 

        O Fauna foi recomendado pela Vercel, é um banco de dados promissor, tem um bom plano gratuito, tem uma api muito 
        boa e simples de ser utilizada. 

                                                       
                
                                                CONFIGURANDO FAUNADB 

        vamos acessar o site do FaunaDB pelo link https://fauna.com e vamos configurar o FaunaDB para isso é necessário 
        criar uma conta é totalmente gratuito para criar a conta e tem os planos que tbm tem o plano gratuito. 

        Depois de criar a conta vamos em criar novo banco de dados, vou chamar de ignews e vou em criar, ele vai cair no painel 
        Vamos utilizar a chave de api do nosso projeto Fauna para poder se comunicar com o banco de dados do fauna,. 

        Vou sem segurança e em criar noca chave,em função ou role eu vou utilizar admin mas tbm é possivel configurar as permissões 
        do usuario, depois vou dá um nome para a minha chave vou chamar de ignews-next-app eu salvo e ele já gera a chave.

        eu copio a chave e dentro da minha aplicação em .env.local eu crio uma variavel de ambiente com a minha chave.

        ps- Lembrando que essa é uma instancia de produção, podemos tbm criar uma de desenvolvimento se quisermos utilizando 
        uma iso no Docker. aqui vamos utiizar em produção mesmo.

        Depois eu vou  criar uma colletion de usuario, vou chamar de users eu deixo as outras opções padrão e crio.

        PS - O Fauna é um banco não relacional e com schema free isso significa que eu não possuo colunas no meu banco de 
        dados o que eu tenho são documentos e cada documento salvo dentro das minhas collection do meu banco de dados elas
        podem ter os dados que eu quiser lá dentro.

        Para que eu possa buscar um usuario por email por ex quando for necessário buscar um usuario ou um registro por algum 
        campo especifico ou ordenar os dados por algum campo especifico, é necessário criar um indice, isso torna a busca 
        no meu banco de dados mais performatica. 

        Vou em indices e vou criar um indice chamado user_by_email em termos eu vou colocar data.email(sempre coloco data e 
                o nome do campo que eu vou salvar) e vou selecionar a opção Unique. o resto deixo padrão; 

        Agora o proximo passo é instalar o sdk para trabalhar com o FaunaDb dentro do projeto para isso eu vou rodar 
                        npm add faunadb   

        Dentro de services eu vou criar um arquivo chamado fauna.ts e em seguida eu importo o Client dentro do faunadb
        e vou exportar fauna passando new Client , vou passar como parametro secret com a minha variavel de ambiente que 
        eu criei para o fauna. isso vai me dá acesso ao banco de dados.

                                                IMPORTANTE      
        PS- As operações que forem feitas no banco de dados ou no stripe ou em qualquer coisa que precisam ter acesso as chaves 
        das variaveis de ambientes elas não podem ser feitas pelo lado do Browser, essas operações só podem ser feitas dentro das 
        minhas rotas api que ficam dentro de api em pages(são rotas back end não são acessiveis pelo Browser), ou  por dentro dos 
        metodos getStaticProps ou getServerSideProps. 







        







        
         



        





        

*/      
