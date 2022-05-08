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



*/