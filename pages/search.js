import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';

import InfoCard from '../components/InfoCard';

export default function Search({ searchResult }) {
  const router = useRouter();

  const { location, startDate, endDate, numOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd/MM/yyyy');
  const formattedEndDate = format(new Date(endDate), 'dd/MM/yyyy');

  const range = `${formattedStartDate} - ${formattedEndDate} `;

  const uLocation = location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <div className="">
      <Header placeholder={`${uLocation} | ${range} | ${numOfGuest}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuest} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {uLocation}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button ">Canceliation Flexibility</p>
            <p className="button ">Type of Place</p>
            <p className="button ">Price</p>
            <p className="button ">Rooms and Beds</p>
            <p className="button ">More Filter</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  star={star}
                  location={location}
                  title={title}
                  description={description}
                  price={price}
                  total={total}
                  img={img}
                  key={img}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResult = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
