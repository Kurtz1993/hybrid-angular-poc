import { IStateProvider } from 'angular-ui-router';
import { ILocationProvider } from 'angular';

import { AuthController } from './views/auth/auth.controller';
import { RepositoriesController } from './views/repositories/repositories.controller';
import { RepositoryController } from './views/repository/repository.controller';

function appConfig($stateProvider: IStateProvider, $location: ILocationProvider) {
  $stateProvider
    .state('auth', {
      url: '/auth',
      views: {
        root: {
          templateUrl: 'views/auth/auth.component.html',
          controller: AuthController,
          controllerAs: '$ctrl',
        },
      },
    })
    .state('home', {
      url: '/repositories',
      views: {
        root: {
          templateUrl: 'views/repositories/repositories.component.html',
          controller: RepositoriesController,
          controllerAs: '$ctrl',
        },
      },
    })
    .state('repository', {
      url: '/repository/:repo',
      views: {
        root: {
          templateUrl: 'views/repository/repository.component.html',
          controller: RepositoryController,
          controllerAs: '$ctrl',
        },
      },
    });

  $location.html5Mode({
    enabled: true,
    requireBase: false,
  });
}

appConfig.$inject = ['$stateProvider', '$locationProvider'];

export { appConfig };
