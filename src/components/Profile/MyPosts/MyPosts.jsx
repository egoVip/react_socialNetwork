import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import { required, maxLengthCreator, minLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControl/FormsControls";

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field  placeholder={'New post'} name={'newPost'} component={Textarea}
				validate={[required, maxLength10, minLength2 ]}/>
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
};

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

const MyPosts = (props) => {

	let postsElements =
		props.posts.map(phrase => <Post messageLike={phrase.messageLike} key={phrase.id} likesCount={phrase.likesCount} />);

	let onAddPost = (value) => {
		props.addPost(value.newPost);
	};

	return (
		<div className={style.content}>
			<div className={style.postsBlock}>
				<h3>My posts</h3>
				<div>
					<AddNewPostReduxForm onSubmit={onAddPost}/>
				</div>
				<div className={style.posts}>
					{postsElements}
				</div>
			</div>
		</div>
	)
}

export default MyPosts; 