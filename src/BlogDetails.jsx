import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="my-5 text-pink-500">{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className="my-5 mx-0">{blog.body}</div>
                </article>
            )}
            
        </div>
     );
}
 
export default BlogDetails;