import { IStateService } from 'angular-ui-router';

import { AuthService } from './services/auth.service';

export function appRun($state: IStateService, authService: AuthService) {
  authService.autoSignIn();

  if (!authService.isLoggedIn) return $state.go('auth');
}

appRun.$inject = ['$state', 'authService'];
