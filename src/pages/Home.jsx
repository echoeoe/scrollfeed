import { useState } from 'react'
import {Post} from '../components/Post'; 

export function Home(){

  return (
    <>
      <Post title="the title" body="the body"/>
      <button id="loginBtn">...</button>
    </>
  );
}