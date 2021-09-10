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
      <main className="flex justify-center w-screen mx-auto py-6 bg-yellow-400">
        <section className="container mx-auto flex flex-col items-center ">
          <article className="flex flex-col w-1/2  mx-auto">
            <div className="flex flex-row align-center justify-between">
              <div className=" self-center" >
                <h2 className=" self-center justify-between m-2 p-2 text-3xl font-extrabold">
                  Najnowsze</h2></div>
              <div className="text-right self-center">
                <Link href="/blog">
                  <a className="text-right self-center text-sm font-extrabold text-yellow-500 bg-gray-800 p-2 m-2  hover:bg-yellow-500 hover:text-gray-800">
                    MOJE WPISY
                  </a>
                </Link></div>
            </div>
          </article>

          <article className="flex flex-col items-center w-full ">
            {latestArticles.map((articleNew, idx) => (
              <>
                <Link href={`/articles/${articleNew.slug}`}>
                  <a className="hover:bg-gray-800 text-gray-800  w-1/2 hover:text-yellow-500">
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

        </section>
      </main>
    </Layout>
  );
}
