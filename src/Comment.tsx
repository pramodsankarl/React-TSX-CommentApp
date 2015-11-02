/// <reference path="../typings/react/react-global.d.ts" />

declare var marked;

interface CommentProp extends React.Props<Comment> {
	author: string;
}

class Comment extends React.Component<CommentProp, any> {
	constructor() {
		super();
	}

	rawMarkup() {
		var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
		return { __html: rawMarkup };
	}

	render() {
		return (
			<div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
			</h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
				</div>

		);
	}
}

export {Comment, CommentProp};
