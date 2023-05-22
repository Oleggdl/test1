import React from "react";
import type {AppProps} from "next/app";
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Atlant Blog app</title>
            <meta name="description" content="test another page 23:40" />
            <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
            <meta http-equiv="Pragma" content="no-cache" />
            <meta http-equiv="Expires" content="0" />
        </Head>
        <Component {...pageProps} />
    </>;
}

export default MyApp;