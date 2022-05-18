import {useState, useEffect} from "react";

export default function PostList() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <ul>
                {post.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}
