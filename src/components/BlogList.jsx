import { Link } from "react-router-dom/cjs/react-router-dom.min"

const BlogList = ({ blogs, title}) => {
    // const blogs = props.blogs
    // const title = props.title

  
  return (
    <div className="blog-list">
      <h2 className="font-bold text-xl">{ title }</h2>
    {blogs.map((blog) => (
        <div className="blog-preview py-[10px] px-4 my-5 mx-0 hover:shadow-md" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="text-xl text-pink-400 mb-2">{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            </Link>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
    ))}
    </div>
  )
}

export default BlogList
 