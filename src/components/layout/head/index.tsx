import Head from 'next/head';

export interface Props {
  pageName: string;
  siteTitle: string;
}

const HeadComponent = ({ pageName, siteTitle }: Props) => {
  return (
    <>
      {/* Head */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="매체 모음 website using Next.js"
        />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/**Hello**%20World.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg"
        />
        <meta name="og:title" content={`${pageName} ${siteTitle}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>
          {pageName}
          {' '}
          -
          {' '}
          {siteTitle}
        </title>
      </Head>
    </>
  );
};

export default HeadComponent;
