import React from "react";
import style from './Post.module.css';


const Post = (props) => {
  return (

    <div className={style.item}>

      <img src="https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png" alt="" />
     
      <div className="post">
        
      {props.messageLike}

      </div>
      <div className="like">
        <button>Like</button>
        {props.likesCount}

      </div>
    </div>

  )
}

export default Post;