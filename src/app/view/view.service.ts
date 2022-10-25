import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  url = environment.baseUrl;
  private _jokesList: any = {list: []};


  constructor(private http: HttpClient) {
  }

  set jokesList(jokes: any) {
    this._jokesList = jokes;
  }

  get jokesList(): any {
    return this._jokesList;
  }


  getJokes(): Observable<any> {
    const url = `${this.url}/api/jokes`;
    return this.http.get<any>(url).pipe(tap((jokes) => {
      this.jokesList.list = jokes;
    }));
  }

  /*  public getJokesByTypes(type: string): Observable<any> {
      const url = `${this.url}/api/jokes/${type}`;
      return this.http.get<any>(url)
    }*/

  public getJokesByTypes(type: any) {
    const jokesArray = this.jokesList.list.filter((j: any) => {
      return j.type === type
    })
    return [...new Set([...jokesArray].sort(() => 0.5 - Math.random()).slice(0, 5))];
  }


}
