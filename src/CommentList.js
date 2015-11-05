var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Comment'], function (require, exports, Comment_1) {
    var CommentList = (function (_super) {
        __extends(CommentList, _super);
        function CommentList() {
            _super.call(this);
        }
        CommentList.prototype.render = function () {
            var commentNodes = this.props.data.map(function (comment) { return (React.createElement(Comment_1.Comment, {"author": comment.author}, comment.text)); });
            return (React.createElement("div", {"className": "commentList"}, commentNodes));
        };
        return CommentList;
    })(React.Component);
    exports.CommentList = CommentList;
});
//# sourceMappingURL=CommentList.js.map