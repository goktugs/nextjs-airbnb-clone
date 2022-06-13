import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';

export default function Home({ placesData, cardData }) {
  return (
    <div>
      <Head>
        <title>AIRBNB CLONE</title>
      </Head>
      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {placesData?.map(({ img, distance, location }, idx) => (
              <SmallCard
                key={idx}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">
            {cardData?.map(({ img, title }, idx) => {
              <MediumCard img={img} title={title} key={idx} />;
            })}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <footer />
    </div>
  );
}

export async function getStaticProps() {
  const placesData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  );

  return {
    props: {
      placesData,
      cardData,
    },
  };
}
