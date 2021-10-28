import Layout from 'components/Layout';
import Head from 'next/head';
import Image from 'next/image'
import Author from 'components/Autor'
export default function About() {
  return (
    <Layout>
      <Head>
        <title>I N F O</title>
      </Head>
      <Author/>
      <main className="flex justify-center p-4 text-gray-800 bg-gray-300 ">
        <section className="bg-white w-full xl:w-3/4 rounded-bl-lg rounded-tr-lg rounded-tl-lg  ">
          <article className="p-4">
            <h1 className="text-4xl text-center"> Cześć witam o Droge pytam </h1>
          </article>
<article className="flex flex-col items-center w-auto p-2 m-2 bg-white ">
  <div className= "border solid p-3 m-auto w-full xl:w-4/5">
    <p className="text-xl">
  Informacje jakie chce wyswietlic o mnie.
Nie wiem jakie informacje i jak je pisac ale jakies sa
  Nie wiem tez jak to dokaldnie zrobic zeby pewne rzeczy zmienic ale jakos sie da.
</p>
</div>
</article>

</section>
      </main>
    </Layout>
  );
}
