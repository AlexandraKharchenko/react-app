import React from "react";


class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json();
            this.setState({data: data});

        } catch (er) {
            console.log(er);
        }
    }

    render() {
        return (
            <div className="posts">
                <ul className="posts__list">
                    {this.state.data.map(post => (
                        <li className="posts_single-post" data-post-id={post.id} key={post.id}>
                            <h3 className="posts__post-title">{post.title}</h3>
                            <p className="posts__post-description">{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default PostCatalog