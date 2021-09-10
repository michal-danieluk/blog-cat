import Layout from 'components/Layout';
import Head from 'next/head';
import { getList } from 'lib/markdownParser';
import Link from 'next/link';
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

      <main className="flex justify-center w-screen mx-auto py-12 bg-yellow-400">
        <section className="container mx-auto flex flex-col bg-gray-800 shadow items-center py-12 ">
          <article className="flex flex-col w-5/6 py-4  mx-auto">
            <div className="flex flex-row ">
              <div className="self-center w-full " >
                <h2 className="text-center text-gray-200 m-2 p-2 text-3xl font-extrabold shadow">
                  MOJE PISANIE</h2></div>
            </div>
          </article>

          <article className="flex flex-col items-center w-5/6 ">
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
        </section>
      </main>
    </Layout>
  );
}
