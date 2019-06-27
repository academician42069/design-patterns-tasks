import { Request } from "./request";

class RequestBuilder {
    public request: Request;

    constructor() {
        this.request = new Request();
    }

    public forUrl(url: string): RequestBuilder {
        this.request.url = url;
        return this;
    }

    public useMethod(method: string): RequestBuilder {
        this.request.method = method;
        return this;
    }

    public payload(payload: object): RequestBuilder {
        this.request.payload = payload;
        return this;
    }

    public build(): Request {
        return this.request;
    }

}

export default RequestBuilder;
