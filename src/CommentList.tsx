/// <reference path="../typings/react/react-global.d.ts" />
import {Comment} from './Comment';

interface CommentData{
	author:string;
	text: string;
}

interface CommentListProps extends React.Props<CommentList>{
	data: CommentData[];
}

class CommentList extends React.Component<CommentListProps, any>{
	constructor() {
		super();
	}

	render() {
		let commentNodes = this.props.data.map((comment)=>(
			<Comment author={comment.author}>
			  {comment.text}
			 </Comment>
		));
		
		return (<div className="commentList">
			{commentNodes}
			</div>
		);
	}
}

export {CommentList, CommentData}

