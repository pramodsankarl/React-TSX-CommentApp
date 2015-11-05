/// <reference path="../typings/react/react-global.d.ts" />
import {CommentData} from './CommentList';

interface CommentRef {
  [key: string]: React.Component<any, any>;
  author: any;
  text: any;
}

interface CommentFormProps extends React.Props<CommentForm>{
   onCommentSubmit(comment:CommentData):void;
}

class CommentForm extends React.Component<CommentFormProps, any>{

  refs: CommentRef;

  constructor() {
    super();
  }

  private handleSubmit(e) {
    e.preventDefault();
    let author = this.refs.author as HTMLInputElement,
      text = this.refs.text as HTMLInputElement,
      authorValue = author.value.trim(),
      textValue = text.value.trim();

    if (!authorValue || !textValue) {
      return;
    }
    
    author.value = '';
    text.value = '';
    
    this.props.onCommentSubmit({author: authorValue, text: textValue});
  }

  render() {
    return (
      <form className="commentForm"  onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name"  ref="author" /> <br />
        <textarea placeholder="Say something..."  ref="text" /><br />
        <input type="submit" value="Post" />
        </form>
    );
  }
}

export {CommentForm};
