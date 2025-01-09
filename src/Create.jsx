import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title, body, author}

        setIsPending(true)

        fetch( 'http://localhost:8000/blogs' ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blod added');
            setIsPending(false)
        })
    }

    return (  
        <div className="create max-w-[400px] my-0 mx-auto text-center">
            <h2 className=" text-pink-400 text-xl mb-7 mt-8">Add new blogs</h2>
            <form onSubmit={handleSubmit}>
                <label className="text-center block">Blog title:</label>
                <input type="text" required className="w-full py-2 px-3 my-3 mx-0 border box-border block" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="text-center block">Blog body:</label>
                <textarea required className="w-full py-2 px-3 my-3 mx-0 border box-border block"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label className="text-center block">Blog author:</label>
                <select className="w-full py-2 px-3 my-3 mx-0 border box-border block"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button className="bg-pink-300 text-white p-2 rounded-lg cursor-pointer">Add Blog</button>}
                {isPending && <button className="bg-pink-300 text-white p-2 rounded-lg cursor-pointer">Adding Blog...</button>}
                <p>{ title} </p>
                <p>{body}</p>
                <p>{author}</p>
                
            </form>
        </div>
    );
}
 
export default Create;
<div></div>