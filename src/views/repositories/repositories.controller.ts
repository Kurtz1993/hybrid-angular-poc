import { IStateService } from 'angular-ui-router';

import { GithubService } from '@legacy/services/github.service';
import { Repository } from '@legacy/typings';

export class RepositoriesController {
  static $inject = ['githubService', '$state'];

  repositories: Repository[];

  username = sessionStorage.getItem('username');

  constructor(private githubService: GithubService, private $state: IStateService) {}

  $onInit() {
    this.githubService
      .getUserRepositories(this.username)
      .then(res => (this.repositories = res.data));
  }

  signOut() {
    sessionStorage.clear();
    this.$state.go('auth');
  }
}
