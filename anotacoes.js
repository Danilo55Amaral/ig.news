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


*/