/// <reference path="../typings/react/react-global.d.ts" />
import {CommentForm} from './CommentForm';
import {CommentList, CommentData } from './CommentList';
import {commentsService} from './CommentService';

declare var $;

interface CommentBoxProps extends React.Props<any>{
  pollInterval:number;
}

interface CommentBoxState {
  data:CommentData[];
}

class CommentBox extends React.Component<CommentBoxProps, CommentBoxState>{

  state:CommentBoxState = {
    data:[]
  };
  
  constructor() {
    super();
  }
  
  getInitialState(){
     //Not sure why this does not work with TSX. This gives warning on React.CreateClass
     return {data: []};
  }
  
  private loadCommentsFromServer() {
     commentsService.getAll()
          .done(data => this.setState({data}))
          .fail((xhr, status, err)=> console.error(status, err.toString()));
  }
   
   private handleCommentSubmit(comment:CommentData) {
      
      //Optimistic Update     
    this.setState({data: [...this.state.data, comment]});
     
     commentsService.create(comment)
          .done(data => this.setState({data}))
          .fail((xhr, status, err)=> console.error(status, err.toString()));
   }
   
   componentDidMount() {
     this.loadCommentsFromServer();
     setInterval(()=>this.loadCommentsFromServer(), this.props.pollInterval);
   }

  render() {
    return (<div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
      </div>
    );
  }
}

export {CommentBox, CommentBoxProps};