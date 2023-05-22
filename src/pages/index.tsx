import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Моя главная страница</title>
                <meta name="description" content="Это мое тестовое описание" />
                <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta http-equiv="Pragma" content="no-cache" />
                <meta http-equiv="Expires" content="0" />
            </Head>

            <main>
                <h1>Добро пожаловать на мою главную страницу!</h1>
                <p>Здесь вы можете найти мое тестовое содержимое.</p>
            </main>
        </div>
    );
}