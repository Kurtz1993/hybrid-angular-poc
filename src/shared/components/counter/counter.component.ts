import { IComponentOptions } from 'angular';

import { CounterController } from './counter.controller';

export const counterComponent: IComponentOptions = {
  templateUrl: 'shared/components/counter/counter.component.html',
  controller: CounterController,
  controllerAs: '$ctrl',
  bindings: {
    type: '<',
    count: '<',
  },
};
