import { IHttpPromise, IHttpService, IPromise } from 'angular';

import { Repository, AppSettings, Commit, Collaborator } from '@legacy/typings';

export class RepoService {
  static $inject = ['env', '$http'];

  constructor(private env: AppSettings, private http: IHttpService) {}

  getRepository(owner: string, repository: string): IHttpPromise<Repository> {
    return this.http.get(`${this.env.apiUrl}/repos/${owner}/${repository}`, {
      headers: this.getAuthorizationHeader(),
    });
  }

  getRepositoryLanguages(
    owner: string,
    repository: string
  ): IHttpPromise<{ [key: string]: number }> {
    return this.http.get(`${this.env.apiUrl}/repos/${owner}/${repository}/languages`, {
      headers: this.getAuthorizationHeader(),
    });
  }

  getRepositoryLastCommit(owner: string, repository: string): IPromise<Commit> {
    return this.http
      .get<Commit[]>(`${this.env.apiUrl}/repos/${owner}/${repository}/commits`, {
        headers: this.getAuthorizationHeader(),
      })
      .then(res => res.data[0]);
  }

  getRepositoryCollaborators(owner: string, repository: string): IHttpPromise<Collaborator[]> {
    return this.http.get(
      `${this.env.apiUrl}/repos/${owner}/${repository}/collaborators?anon=true`,
      {
        headers: this.getAuthorizationHeader(),
      }
    );
  }

  private getAuthorizationHeader(): { Authorization: string } {
    return { Authorization: `Basic ${sessionStorage.getItem('token')}` };
  }
}
