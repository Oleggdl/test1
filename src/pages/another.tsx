import Head from 'next/head';

const Article = (): JSX.Element => {

  return (
    <>
      <Head>
        <meta name="description" content="test another page 22:38" />
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta http-equiv="Expires" content="0" />
        {/*<title>test another page title 22:38</title>*/}
      </Head>
      <div>
        test another page 22:38
      </div>
    </>
  );
};

export default Article;
