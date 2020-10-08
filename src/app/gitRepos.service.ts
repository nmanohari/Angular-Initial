import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repos } from './repos.model';

@Injectable()

export class GitRepos
{
    baseUrl:string="https://api.github.com/"
    constructor(private httpClient:HttpClient)
{

}
getRepos(user:string):Observable<Repos[]>{
    return this.httpClient.get<Repos[]>(this.baseUrl+'users/'+user+'/repos'); 

}
}