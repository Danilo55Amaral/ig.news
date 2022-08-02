import Head from "next/head";
import styles from "./styles.module.scss";

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