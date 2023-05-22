import React from "react";
import type {AppProps} from "next/app";
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Atlant Blog app</title>
            <meta name="description" content="test another page 23:40" />
        </Head>
        <Component {...pageProps} />
    </>;
}

export default MyApp;