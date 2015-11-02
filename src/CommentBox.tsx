/// <reference path="../typings/react/react-global.d.ts" />
import {CommentForm} from './CommentForm';
import { CommentList } from './CommentList';

class CommentBox extends React.Component<any, any>{

  constructor() {
    super();
  }

  render() {
    return (<div className="commentBox">
      Hello, world!I am a CommentBox.
      <CommentForm />
        <CommentList/>
      </div>
    );
  }
}

export {CommentBox};