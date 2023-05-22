import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                {/*<title>Моя главная страница</title>*/}
                <meta name="description" content="Это мое тестовое описание" />
            </Head>

            <main>
                <h1>Добро пожаловать на мою главную страницу!</h1>
                <p>Здесь вы можете найти мое тестовое содержимое.</p>
            </main>
        </div>
    );
}