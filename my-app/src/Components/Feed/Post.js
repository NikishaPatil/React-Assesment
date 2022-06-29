import React from 'react'
import './post.css'
import { FiHeart } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Comment from "./comment.json";
import {useState} from "react";
const Post = ({data}) => { 
  const [click,setClick]=useState(false);
  return (
    <div className="Post">
        <img src={data.img} alt="" />


        <div className="postReact">
            <FiHeart  />
            <FaRegCommentDots  onClick={()=>{setClick(!click)}}/>
            {click && <div>
              {Comment.map((comm)=>{
                return(
        <div className="com">
          <h4>{comm.name}</h4>
          {comm.time}
          <div className="content">
          {comm.content}
          </div>
          {comm.like}
          </div>
                )
              })}
           <p>{}</p>


              </div>}
            <FiSend  />
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post