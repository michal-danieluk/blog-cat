import Layout from 'components/Layout';
import Head from 'next/head';
import { getListOfArticles, getArticle } from 'services/articles';
import Image from 'next/image';
export const getStaticPaths = async () => {
  const articles = getListOfArticles('_articles');

  return {
    paths: articles.map((art) => ({ params: { slug: art.slug } })),
    fallback: false
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getArticle(slug);

  return {
    props: { article }
  };
};

export default function Article({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <link href="https://unpkg.com/browse/prismjs@1.15.0/themes/prism-okaidia.css" rel="stylesheet" />
      </Head>
      <main className="flex flex-col items-center  w-screen">
        <section className="xl:w-3/4 xl:mb-12 w-full m-2 p-2">
          <article className="flex flex-col items-center bg-white p-4 rounded-bl-lg rounded-tr-lg rounded-tl-lg ">
            <div><h1 className="text-center  text-5xl pt-4">{article.title}</h1></div>
            <div className=" w-1/2 h-px bg-yellow-500 mb-8"> &nbsp; </div>
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>

              <Image
                src={article.cover}
                layout="fill"
                placeholder="blur"
                objectFit="cover"
                objectPosition="center 75%"
              />
            </div>

            <div
              className="max-w-3xl mx-auto bg-white p-4 m-4 articleBody"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </section>
      </main>
    </Layout>
  );
}
