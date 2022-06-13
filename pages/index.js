import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AIRBNB CLONE</title>
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
