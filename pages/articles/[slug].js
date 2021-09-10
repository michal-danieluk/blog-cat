import Layout from 'components/Layout';
import Head from 'next/head';
import { getListOfArticles, getArticle } from 'services/articles';

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
      <main className="w-screen">
        <article className=" p-4">
          <h1 className="text-center text-gray-200 text-5xl p-4 m-4">{article.title}</h1>
          <div
            className="max-w-3xl mx-auto text-yellow-400 articleBody"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>
    </Layout>
  );
}
