import { useEffect, useState } from 'react';
import { Post } from '../components/Post'; 
import { useNavigate } from "react-router-dom"; 
import { supabase } from '../utils/supabaseClient.js';
import { useSupabaseFetch } from '../hooks/useSupabaseFetch.js';

export function Home(){
  
  const navigate = useNavigate();

  // const testPosts = [
  //   {id: '1', title: 'Lorem ipsm', body: 'test body 1 test body 1 test body 1 test body 1 test body 1'},
  //   {id: '2', title: 'The Pumpkin Patch', body: 'test body 2 test body 2 test body 2 test body 2 test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2. test body 2 test body 2.'},
  //   {id: '3', title: 'Trunk or Treating', body: 'test body 1 test body 1 test body 1 test body 1 test body 1'},
  //   {id: '4', title: 'Horse Riding', body: '- These are local test posts - '}
  // ];

  //fetch posts from db
  const {data: posts, loading, error} = useSupabaseFetch('posts');

  return (
    <div className = 'scrollfeed'>

      {posts? posts.map(post => (
        <Post key = {post.id} title={post.title} body={post.body}/>
      )
    ): <p>Loading...</p>}

    </div>
  );
}