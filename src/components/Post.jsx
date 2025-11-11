import './Post.css';

function Post({title, body}) {
    return (
    <div className = "post">
        <h2 className ="title">{title}</h2>
        <p className ="body">{body}</p>

    </div>
    );
}

export default Post;