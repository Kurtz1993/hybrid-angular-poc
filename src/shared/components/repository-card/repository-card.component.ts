import { IComponentOptions } from 'angular';

import { RepositoryCardController } from './repository-card.controller';

export const repositoryCardComponent: IComponentOptions = {
  templateUrl: 'shared/components/repository-card/repository-card.component.html',
  controller: RepositoryCardController,
  controllerAs: '$ctrl',
  bindings: {
    repository: '<',
  },
};
