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

                                
*/