import Layout from 'components/Layout';
import Head from 'next/head';
import { getList } from 'lib/markdownParser';
import Link from 'next/link';
//import Image from 'next/image';
import Autor from 'components/Autor';

export const getStaticProps = () => {
  const articles = getList('_articles');
  articles.sort((a, b) => a.createdAt - b.createdAt).reverse();
  return {
    props: { articles }
  };
};

export default function Home({ articles }) {
  const lenth = articles.length;
  console.log('dlugosc', lenth);
  console.log('articles', articles);

  //    const articles_change = articles.splice(0,2);
  const latestArticles = articles.slice(0, 3);
  // const artykulyInne = articles
  console.log('latestArticles', latestArticles);
  //articles.splice(0, 2);
  //        <section className="max-w-full 2xl:w-1/2 md:max-w-4xl  ">

  return (
    <Layout>
      <Head>
        <title>Michal Blog</title>
      </Head>
      <Autor />
      <main className="flex justify-center w-screen mx-auto py-6 px-2 bg-gray-200">
        <section className="container mx-auto flex flex-col items-center ">
          <article className="flex flex-col xl:w-1/2 w-full mx-auto">

          </article>

          <article className="flex flex-col items-center xl:w-full md:w-4/5 w-full p-4 m-4 bg-white rounded-bl-lg rounded-tr-lg rounded-tl-lg  ">

            <div className="flex flex-row align-center justify-between">
              <div className=" self-center" >
                <h2 className=" self-center justify-between m-2 p-2 text-3xl font-extrabold">
                  Najnowsze</h2></div>
              <div className="text-right self-center">
                <Link href="/blog">
                  <a className="text-right self-center text-sm font-extrabold text-yellow-500 bg-gray-800 p-2 m-2  hover:bg-yellow-500 hover:text-gray-800">
                    Artykuły
                  </a>
                </Link></div>
            </div>
            <div className=" w-1/2 h-px bg-black mb-4"> &nbsp; </div>



            <div className="mb-4">
              <ul>
                {latestArticles.map((articleNew, idx) => (
                  <div key={idx}>
                    <Link href={`/articles/${articleNew.slug}`}>
                      <a className=" text-gray-800 w-full xl:w-1/2 md:w-4/5 text-opacity-75 hover:text-opacity-100 rounded-bl-lg rounded-tr-lg rounded-tl-lg ">
                        <li>

                          <span className="font-bold xl:text-2xl text-xl ">
                            <span className="text-gray-200 hover:no-underline"> * </span>
                            {articleNew.title}
                          </span>

                          {/*
                        <div key={idx} className="flex flex-row ">
                          <div className="w-4/5 ">
                            <h2 className="font-bold p-2 m-2 tracking-normal text-2xl ">
                              <span className="text-gray-200 hover:no-underline"> * </span> {articleNew.title}
                            </h2>
                          </div>


              */}
                          {//                      <div className="text-base text-right text-gray-600 xl:w-1/6 sm:w-24 px-6 p-2 m-2 self-end bg-indigo-200  rounded-bl-lg rounded-tr-lg rounded-tl-lg">
                            //                      <div> {new Date(articleNew.createdAt).toLocaleDateString()} </div>
                            //                  </div>
                            //                        </div>
                          }

                        </li>
                      </a>
                    </Link>
                  </div>
                ))}
              </ul></div>
          </article>

        </section>
      </main>
    </Layout>
  );
}
