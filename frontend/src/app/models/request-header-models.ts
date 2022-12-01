
export class RequestHeader {
    RequestMethod: string

    constructor(requestMethod: string) {
        this.RequestMethod = requestMethod.toLocaleUpperCase();

    }
    public toJson() {
        return {
            // "Accept" : "/",
            // "Accept-Encoding" : "gzip,deflate,sdch",
            // "Accept-Language" : "en-US;q=0.8,en;q=0.6",
            // "Access-Control-Request-Headers" : "accept, origin, content-type",
            // "Access-Control-Request-Method" : this.RequestMethod,
            // "Cache-Control" : "no-cache",
            // "Connection" : "keep-alive",
            // "Pragma" : "no-cache",
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            // "Access-Control-Allow-Origin": "*",
            // 'Content-Type' : 'application/json'
        }
    }
}