/// <reference path="../typings/react/react-global.d.ts" />
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
        CommentForm.prototype.render = function () {
            return (React.createElement("div", {"className": "commentForm"}, "Hello, world! I am a CommentForm."));
        };
        return CommentForm;
    })(React.Component);
    exports.CommentForm = CommentForm;
});
//# sourceMappingURL=CommentForm.js.map