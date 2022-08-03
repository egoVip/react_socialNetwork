import React, { useState } from "react";
import style from './Post.module.css';
import yellowUser from '../../../../assets/img/pngwing.com.png'


const Post = (props) => {

  let [likesCount, setLikesCount] = useState(0);
  return (

    <div className={style.item}>

      <img src={yellowUser} alt="" />

      <div className={style.post}>
        {props.messageLike}
      </div>
      <div className={style.like}>
        <button onClick={() => setLikesCount(likesCount + 1)}>Like</button>
      </div>
      <div className={style.likesCount}></div>{likesCount}
      <div className={style.dislike}>
        {likesCount > 0 && <button onClick={() => setLikesCount(likesCount - 1)}>DisLike</button>}
      </div>
    </div>

  )
}

export default Post;

<iframe src="http://picsart.com/e/330722772036211?h=1&f=1&width=320&height=408&fl=0"
      height="408"
      width="320"
      style="border: 0; overflow: hidden; "
    ></iframe>