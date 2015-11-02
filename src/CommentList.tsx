/// <reference path="../typings/react/react-global.d.ts" />
import {Comment} from './Comment';

class CommentList extends React.Component<any, any>{
	constructor() {
		super();
	}

	render() {
		return (<div className="commentList">
			Hello, world!I am a CommentList.
			<Comment author="Pete Hunt">This is Comment1</Comment>
			<Comment author="Jordan Walke">This is Comment2</Comment>
			</div>
		);
	}
}

export {CommentList}

