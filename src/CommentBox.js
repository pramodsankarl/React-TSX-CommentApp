var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './CommentForm', './CommentList', './CommentService'], function (require, exports, CommentForm_1, CommentList_1, CommentService_1) {
    var CommentBox = (function (_super) {
        __extends(CommentBox, _super);
        function CommentBox() {
            _super.call(this);
            this.state = {
                data: []
            };
        }
        CommentBox.prototype.getInitialState = function () {
            //Not sure why this does not work with TSX. This gives warning on React.CreateClass
            return { data: [] };
        };
        CommentBox.prototype.loadCommentsFromServer = function () {
            var _this = this;
            CommentService_1.commentsService.getAll()
                .done(function (data) { return _this.setState({ data: data }); })
                .fail(function (xhr, status, err) { return console.error(status, err.toString()); });
        };
        CommentBox.prototype.handleCommentSubmit = function (comment) {
            var _this = this;
            //Optimistic Update     
            this.setState({ data: this.state.data.concat([comment]) });
            CommentService_1.commentsService.create(comment)
                .done(function (data) { return _this.setState({ data: data }); })
                .fail(function (xhr, status, err) { return console.error(status, err.toString()); });
        };
        CommentBox.prototype.componentDidMount = function () {
            var _this = this;
            this.loadCommentsFromServer();
            setInterval(function () { return _this.loadCommentsFromServer(); }, this.props.pollInterval);
        };
        CommentBox.prototype.render = function () {
            return (React.createElement("div", {"className": "commentBox"}, React.createElement("h1", null, "Comments"), React.createElement(CommentList_1.CommentList, {"data": this.state.data}), React.createElement(CommentForm_1.CommentForm, {"onCommentSubmit": this.handleCommentSubmit.bind(this)})));
        };
        return CommentBox;
    })(React.Component);
    exports.CommentBox = CommentBox;
});
//# sourceMappingURL=CommentBox.js.map