import Layout from 'components/Layout';
import Head from 'next/head';
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>JA </title>
      </Head>
      <main className="flex justify-center text-gray-800 bg-yellow-500 ">
        <section className="flex">
          <article className="p-4">
            <h1 className="text-4xl"> Cześć, </h1>
          </article>

          <article className="m-2 p-2 shadow ring-yellow-500  ring">
            <Image
              src="/head_1.jpeg"
              // layout="fill"
              width={308}
              height={232}
              alt="Me"
              className="object-fill "
            />
          </article>
        </section>
      </main>


      <p>Tuaj jest o mnie.Napewno? Ne ne ne ne ne</p>
    </Layout>
  );
}
