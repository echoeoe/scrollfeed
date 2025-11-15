// import { useEffect, useState } from react;
//import supabase from '../supabaseClient';

export function Post({title, body}) {

    const postStyle = {
        backgroundColor: 'antiquewhite',
        border: '3px solid orange',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        color: 'black'
    };

    return (
    <div style = {postStyle} className = "post">
        <h2 className ="title">{title}</h2>
        <p className ="body">{body}</p>
    </div>
    );
}