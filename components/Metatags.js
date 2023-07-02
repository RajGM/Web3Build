import Head from 'next/head';

export default function Metatags({
  title = 'Web3Build',
  description = 'Opportunities listed and verified by the community',
  image = 'logo.jpg',
}) {
  return (
    <Head>
      <title>{'InfiOpp'}</title>
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={'/'+image} />
    </Head>
  );
}
