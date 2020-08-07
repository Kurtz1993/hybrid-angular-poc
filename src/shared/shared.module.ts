import * as angular from 'angular';

import { repositoryCardComponent } from './components/repository-card/repository-card.component';
import { counterComponent } from './components/counter/counter.component';
import { collaboratorsComponent } from './components/collaborators/collaborators.component';

export const sharedModule = angular
  .module('hybrid.shared', [])
  .component('repositoryCard', repositoryCardComponent)
  .component('counter', counterComponent)
  .component('collaborators', collaboratorsComponent).name;
