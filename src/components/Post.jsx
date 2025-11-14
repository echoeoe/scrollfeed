// import { useEffect, useState } from react;
//import supabase from '../supabaseClient';

function Post({title, body}) {

    const postStyle = {
        backgroundColor: 'antiquewhite',
        border: '3px solid orange',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        color: 'black'
    };

    return (
    <div style = {postStyle} className = "post">
        <h2 className ="title">title: {title}</h2>
        <p className ="body">body: {body}</p>
    </div>
    );
}

export default Post;