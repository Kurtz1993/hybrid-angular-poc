import { IHttpPromise, IHttpService } from 'angular';

import { AppSettings, Repository } from '@legacy/typings';

export class GithubService {
  static $inject = ['env', '$http'];

  constructor(private env: AppSettings, private http: IHttpService) {}

  getUserRepositories(username: string): IHttpPromise<Repository[]> {
    return this.http.get(`${this.env.apiUrl}/users/${username}/repos?type=all&per_page=100`, {
      headers: this.getAuthorizationHeader(),
    });
  }

  private getAuthorizationHeader(): { Authorization: string } {
    return { Authorization: `Basic ${sessionStorage.getItem('token')}` };
  }
}
