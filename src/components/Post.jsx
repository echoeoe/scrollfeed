import './Post.css';
// import { useEffect, useState } from react;
//import supabase from '../supabaseClient';

function Post({title, body}) {
    return (
    <div className = "post">
        <h2 className ="title">title: {title}</h2>
        <p className ="body">body: {body}</p>
    </div>
    );
}

export default Post;