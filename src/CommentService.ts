/// <reference path="../typings/jquery/jquery.d.ts" />

enum HTTPMethod {
        GET, PUT, POST, DELETE, PATCH
}

class CommentsService {
        private url:string= "/api/comments";
        constructor() {
                
                }
        
        getAll() {
                return this.callAjax(HTTPMethod.GET);
        }
        
        create(data: any) {
                return this.callAjax(HTTPMethod.POST, data);
        }
        
        private callAjax(type: HTTPMethod, data?: any): JQueryXHR {
                return $.ajax({
                        url:this.url,
                        dataType: 'json',
                        type: HTTPMethod[type],
                        data
                });
        }

}

let commentsService = new CommentsService();
export {commentsService, CommentsService};