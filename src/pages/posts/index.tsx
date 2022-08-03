import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";
import * as Prismic from "@prismicio/client";
import { GetStaticProps } from 'next';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>02 de agosto de 2022</time>
                        <strong>Criação de Células tronco embrionárias</strong>
                        <p>Criação de celulas em laborstorio foi feita a partir de celulas adultas modificadas geneticamente</p>
                    </a>
                    <a href="#">
                        <time>02 de agosto de 2022</time>
                        <strong>Criação de Células tronco embrionárias</strong>
                        <p>Criação de celulas em laborstorio foi feita a partir de celulas adultas modificadas geneticamente</p>
                    </a>
                    <a href="#">
                        <time>02 de agosto de 2022</time>
                        <strong>Criação de Células tronco embrionárias</strong>
                        <p>Criação de celulas em laborstorio foi feita a partir de celulas adultas modificadas geneticamente</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient() 

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'publication')
    ], {
        fetch: ['title', 'content'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {}
    }
}