var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var CommentForm = (function (_super) {
        __extends(CommentForm, _super);
        function CommentForm() {
            _super.call(this);
        }
        CommentForm.prototype.handleSubmit = function (e) {
            e.preventDefault();
            var author = this.refs.author, text = this.refs.text, authorValue = author.value.trim(), textValue = text.value.trim();
            if (!authorValue || !textValue) {
                return;
            }
            author.value = '';
            text.value = '';
            this.props.onCommentSubmit({ author: authorValue, text: textValue });
        };
        CommentForm.prototype.render = function () {
            return (React.createElement("form", {"className": "commentForm", "onSubmit": this.handleSubmit.bind(this)}, React.createElement("input", {"type": "text", "placeholder": "Your name", "ref": "author"}), " ", React.createElement("br", null), React.createElement("textarea", {"placeholder": "Say something...", "ref": "text"}), React.createElement("br", null), React.createElement("input", {"type": "submit", "value": "Post"})));
        };
        return CommentForm;
    })(React.Component);
    exports.CommentForm = CommentForm;
});
//# sourceMappingURL=CommentForm.js.map