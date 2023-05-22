import Head from 'next/head';
import type {AppProps} from 'next/app';

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Atlant Blog</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={'app.descriptionMainPage'}/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
