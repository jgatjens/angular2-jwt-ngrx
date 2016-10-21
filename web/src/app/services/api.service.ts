import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
  private api_url: string = 'http://localhost:3001';

  public headers: Headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(private http: Http) {}

  public get(path: string): Observable<any> {
    let headers = new Headers({ Accept: 'application/json'});

    return this.http.get(
      `${this.api_url}${path}`,
      { headers: headers }
    )
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson);
  }

  post(path: string, body): Observable<any> {
    return this.http.post(
      `${this.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.headers }
    )
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson);
  }

  setHeaders(headers) {
    Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
  }

  private getJson(response: Response) {
    return response.json();
  }

  private checkForError(response: Response): Response | Observable<any> {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText)
      error['response'] = response;
      console.error(error);
      throw error;
    }
  }
}
