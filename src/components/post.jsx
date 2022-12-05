const Post = ({ post }) => {
  return (
    <section className="container mx-auto px-3 md:px-2 lg:px-6 py-3">
      <div className="grid lg:grid-cols-3 gap-4 place-content-center">
        <div className=" rounded-lg shadow-md border border-gray-200 max-w-sm bg-white">
          <img className="rounded-t-lg" src={post.coverImage} alt={post.title}/>
          <div className="p-5">
            <h2 className="my-3 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h2>
            <p className="font-normal text-gray-70 mb-5">{post.brief}</p>
            <a 
              href={`https://hardeborlaa.hashnode.dev/${post.slug}`} className="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-blue-300">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post;