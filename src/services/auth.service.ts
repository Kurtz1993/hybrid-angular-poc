export class AuthService {
  isLoggedIn = false;

  signIn(username: string, password: string): void {
    const token = btoa(`${username}:${password}`);

    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);

    this.isLoggedIn = true;
  }

  autoSignIn() {
    const tokenExists = !!sessionStorage.getItem('token');

    this.isLoggedIn = tokenExists;
  }
}
