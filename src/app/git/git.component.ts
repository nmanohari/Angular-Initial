import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos.model';
import { GitRepos } from '../gitRepos.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  user: string = "nmanohari";
  repos: Repos[];
  constructor(private gitRepos: GitRepos) { }
  getRepos(): void {
    this.gitRepos.getRepos(this.user).subscribe(repo => this.repos = repo);
  }
  ngOnInit(): void {
  }

}
