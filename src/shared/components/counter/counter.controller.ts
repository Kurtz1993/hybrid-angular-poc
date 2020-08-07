import { RepositoryCounter } from '../../../typings';

export class CounterController {
  type: RepositoryCounter;
  count: number;

  icon = '';

  $onInit() {
    switch (this.type) {
      case RepositoryCounter.Stars:
        this.icon = 'fa-star';
        break;
      case RepositoryCounter.Forks:
        this.icon = 'fa-code-fork';
        break;
      case RepositoryCounter.Watchers:
        this.icon = 'fa-eye';
        break;
      default:
        this.icon = 'fa-exclamation-circle';
        break;
    }
  }
}
