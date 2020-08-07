import { IStateService } from 'angular-ui-router';

import { AuthService } from '@legacy/services/auth.service';

export class AuthController {
  static $inject: string[] = ['authService', '$state'];

  octocat = require('./assets/octocat.png').default;

  username = '';
  password = '';

  constructor(private authService: AuthService, private $state: IStateService) {}

  signIn(): void {
    this.authService.signIn(this.username, this.password);

    this.$state.go('home');
  }
}
