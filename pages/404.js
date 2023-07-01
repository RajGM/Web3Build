import Link from 'next/link';

export default function Custom404() {
  return (
    <main className='middle fullHeight'>
      <h1>404 - That page does not seem to exist...</h1>
      <iframe
        src="giphy.gif"
        width="480"
        height="362"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </main>
  );
}
