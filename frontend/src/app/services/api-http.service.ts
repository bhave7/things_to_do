import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestHeader } from '../models/request-header-models';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  private baseURL = 'http://localhost:8000/'

  constructor(private httpClient: HttpClient) {
  }

  getHeaders(requestMethod: string) {
    let requestModel = new RequestHeader(requestMethod);
    return requestModel.toJson();
  }

  public get(url: string, params: object={}, ) {
    url = this.baseURL + url + '/'
    
    let options: object = {
      headers: {},
      params: params
    };

      return this.httpClient.get(url, options);

      
  }

  public post(url: string, data: any) {
    url = this.baseURL + url + '/'
    return this.httpClient.post(url, data);
  }

  public put(url: string, Id: number, data: {[key: string]: string}) {
    url = this.baseURL + url + '/' + Id.toString();


    let urlencodedBody = "";
    for (let key in data) {
      urlencodedBody+= key + ":" + data[key] + ";"
    }
    
    let options: object = {
      headers: this.getHeaders('put'),
      body: urlencodedBody
    }

    console.log("Calling", url, options);

    return this.httpClient.request('put', url, options);
  }

  public delete(url: string, Id: number) {
    url = this.baseURL + url + '/' + Id.toString(); + '/'
    return this.httpClient.request('delete', url);
  }
}
