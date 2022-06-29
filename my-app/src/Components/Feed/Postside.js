import React from 'react';
import Posts from './Feed';
import Middlebar from '../Middlebar/Middlebar';
import './postside.css';



const PostSide = () => {
  return (
   <div className="PostSide">
       <Middlebar/>
       <Posts/>
   </div>
  )
}

export default PostSide;