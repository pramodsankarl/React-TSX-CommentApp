/// <reference path="./typings/react/react-global.d.ts" />
import {CommentBox} from './src/CommentBox';

ReactDOM.render(<CommentBox  pollInterval={2000}/>, 
				document.getElementById('container'));