import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElements =
		props.posts.map(phrase => <Post messageLike={phrase.messageLike} likesCount={phrase.likesCount} />);

	let newPostelement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostelement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={style.content}>
			<div className={style.postsBlock}>
				<h3>My posts</h3>
				<div>
					<div>
						<textarea onChange={onPostChange} ref={newPostelement} value={props.newPostText} />
					</div>
					<div>
						<button onClick={onAddPost}>Add post</button>
					</div>
				</div>
				<div className={style.posts}>
					{postsElements}
				</div>
			</div>
		</div>
	)
}

export default MyPosts; 