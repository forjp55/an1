import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";
import {Joke} from "../shared/models/joke";

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  url = environment.baseUrl;
  private _jokesList: {list: Array<Joke>} = {list: []};


  constructor(private http: HttpClient) {
  }

  set jokesList(jokes: any) {
    this._jokesList = jokes;
  }

  get jokesList(): {list: Array<Joke>} {
    return this._jokesList;
  }


  getJokes(): Observable<Joke[]> {
    const url = `${this.url}/api/jokes`;
    return this.http.get<any>(url).pipe(tap((jokes) => {
      this.jokesList.list = jokes;
    }));
  }

  /*  public getJokesByTypes(type: string): Observable<any> {
      const url = `${this.url}/api/jokes/${type}`;
      return this.http.get<any>(url)
    }*/

  public getJokesByTypes(type: string) {
    const jokesArray = this.jokesList.list.filter((j: Joke) => {
      return j.type === type
    })
    return [...new Set([...jokesArray].sort(() => 0.5 - Math.random()).slice(0, 5))];
  }


}
