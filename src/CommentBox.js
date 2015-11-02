var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './CommentForm', './CommentList'], function (require, exports, CommentForm_1, CommentList_1) {
    var CommentBox = (function (_super) {
        __extends(CommentBox, _super);
        function CommentBox() {
            _super.call(this);
        }
        CommentBox.prototype.render = function () {
            return (React.createElement("div", {"className": "commentBox"}, "Hello, world!I am a CommentBox.", React.createElement(CommentForm_1.CommentForm, null), React.createElement(CommentList_1.CommentList, null)));
        };
        return CommentBox;
    })(React.Component);
    exports.CommentBox = CommentBox;
});
//# sourceMappingURL=CommentBox.js.map