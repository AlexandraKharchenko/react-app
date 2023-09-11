import React, {useEffect, useState} from "react";

const PostCatalog = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => setData(res))
    }, [])


    return (
        <div className="posts">
            <ul className="posts__list">
                {data.map(post => (
                    <li className="posts_single-post" data-post-id={post.id} key={post.id}>
                        <h3 className="posts__post-title">{post.title}</h3>
                        <p className="posts__post-description">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostCatalog