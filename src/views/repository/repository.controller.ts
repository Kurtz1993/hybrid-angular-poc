import { IStateParamsService } from 'angular-ui-router';

import { Repository, Collaborator, CommitDetails } from '@legacy/typings';
import { RepoService } from '@legacy/services/repo.service';

export class RepositoryController {
  static $inject = ['repoService', '$stateParams'];

  repository: Repository;
  collaborators: Collaborator[];
  lastCommit: CommitDetails;
  languages: { [key: string]: number };

  constructor(private repoService: RepoService, private $stateparams: IStateParamsService) {}

  $onInit() {
    const owner = sessionStorage.getItem('username');
    const name = this.$stateparams.repo;
    this.repoService.getRepository(owner, name).then(res => {
      this.repository = res.data;
    });
    this.repoService.getRepositoryCollaborators(owner, name).then(res => {
      this.collaborators = res.data;
    });
    this.repoService.getRepositoryLastCommit(owner, name).then(res => {
      this.lastCommit = res.commit;
    });

    this.repoService.getRepositoryLanguages(owner, name).then(res => {
      this.languages = res.data;
    });
  }
}
