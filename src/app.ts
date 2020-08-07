import * as angular from 'angular';
import 'angular-ui-router';
import './styles.scss';
import { appConfig } from './app.config';
import { appRun } from './app.run';
import { AuthService } from './services/auth.service';
import { GithubService } from './services/github.service';
import { sharedModule } from './shared/shared.module';
import { RepoService } from './services/repo.service';

angular
  .module('hybrid', ['ui.router', sharedModule])
  .service('authService', AuthService)
  .service('githubService', GithubService)
  .service('repoService', RepoService)
  .constant('env', {
    apiUrl: 'https://api.github.com',
  })
  .config(appConfig)
  .run(appRun);
