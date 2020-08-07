import { IComponentOptions } from 'angular';

import { CollaboratorsController } from './collaborators.controller';

export const collaboratorsComponent: IComponentOptions = {
  templateUrl: 'shared/components/collaborators/collaborators.component.html',
  controller: CollaboratorsController,
  controllerAs: '$ctrl',
  bindings: {
    collaborator: '<',
  },
};
