export default function LatestArticles() {
  return (
    <div key={idx}>
      <Link href={`/articles/${articleNew.slug}`}>
        <a className="hover:bg-gray-300">
          <div className="flex flex-row">{new Date(articleNew.createdAt).toLocaleDateString()}</div>
          <div>
            <h2 className="font-bold tracking-normal text-gray-800 text-1xl">{articleNew.title}</h2>
          </div>
        </a>
      </Link>
    </div>);
}
