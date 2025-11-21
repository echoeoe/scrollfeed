import { useState } from 'react'
import {Post} from '../components/Post'; 

function handleClick(event){
  event.preventDefault();
  console.log('clicked');
}

export function Home(){

  const posts = [
    {id: '1', title: 'Lorem ipsm', body: 'test body 1 test body 1 test body 1 test body 1 test body 1'},
    {id: '2', title: 'The Pumpkin Patch', body: 'test body 2 test body 2 test body 2 test body 2 test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2.'},
    {id: '3', title: 'Trunk or Treating', body: 'test body 1 test body 1 test body 1 test body 1 test body 1'},
    {id: '4', title: 'Horse Riding', body: 'test body 1 test body 1 test body 1 test body 1 test body 1'}
  ];

  return (
    <div className = 'scrollfeed'>

      {posts.map(post => (
        <Post key = {post.id} title={post.title} body={post.body}/>
      )
    )}

      <button id="loginBtn" onClick={handleClick}>...</button>
    </div>
  );
}