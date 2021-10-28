import Layout from 'components/Layout';
import Head from 'next/head';
import { getList } from 'lib/markdownParser';
import Link from 'next/link';
import Image from 'next/image'
//import Image from 'next/image';

export const getStaticProps = () => {
  const articles = getList('_articles');
  articles.sort((a, b) => a.createdAt - b.createdAt).reverse();
  return {
    props: { articles }
  };
};

export default function Home({ articles }) {
  console.log('articles', articles);

  return (
    <Layout>
      <Head>
        <title>Blog page - wpisy </title>
      </Head>

      <main className="flex justify-center w-screen mx-auto bg-gray-200">
        <section className="mx-auto flex flex-col items-center w-full ">



          <article className="flex flex-col items-center xl:m-8 xl:p-8 xl:w-3/4 md:w-4/5 w-full p-4 m-4 bg-white rounded-bl-lg rounded-tr-lg rounded-tl-lg  ">

            <div className="flex flex-row align-center justify-between">
              <div className=" self-center" >
                <h2 className=" self-center justify-between m-2 p-2 text-3xl font-extrabold">
                  Artykuły</h2></div>
            </div>
            <div className=" w-1/2 h-px bg-black mb-4"> &nbsp; </div>

            <div style={{ position: 'relative', width: '100%', height: '400px' }}>

              <Image
                src="/artykuly.jpeg"
                // layout="fill"
                layout="fill"
                placeholder="blur"
                objectFit="cover"
                objectPosition="center 75%"
                className="rounded-bl-lg rounded-tr-lg rounded-tl-lg "
                //   width={308}
                //   height={232}
                alt="Me"
              />


            </div>


            <div className="mb-4">
              <ul>
                {articles.map((articleNew, idx) => (
                  <div key={idx}>
                    <Link href={`/articles/${articleNew.slug}`}>
                      <a className=" text-gray-800 w-full xl:w-1/2 md:w-4/5 text-opacity-75 hover:text-opacity-100 rounded-bl-lg rounded-tr-lg rounded-tl-lg ">
                        <li className="xl:p-2">

                          <span className="font-bold xl:text-2xl text-xl ">
                            <span className="text-gray-200 hover:no-underline"> * </span>
                            {articleNew.title}
                          </span>
                        </li>
                      </a>
                    </Link>
                  </div>
                ))}
              </ul></div>
          </article>














          {/*

          <article className="flex flex-col items-center container w-5/6 bg-white">


            {articles.map((articleNew, idx) => (
              <>
                <Link href={`/articles/${articleNew.slug}`}>
                  <a className="text-yellow-500  w-1/2 hover:text-yellow-300 hover:shadow hover:bg-gray-900">
                    <div key={idx} className="flex flex-row ">
                      <div className="w-2/3">
                        <h2 className="font-bold p-2 m-2 tracking-normal text-2xl ">
                          {articleNew.title}
                        </h2>
                      </div>
                      <div className="text-base text-right text-yellow-500 xl:w-60 sm:w-24 px-6 p-2 m-2 self-end bg-gray-600 clip-path-left-small">
                        <div> {articleNew.category} </div>
                        <div> {new Date(articleNew.createdAt).toLocaleDateString()} </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </>
            ))}
          </article>


      */}
        </section>
      </main>
    </Layout>
  );
}
