import { Injectable } from '@angular/core';
import axios from '../axios.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = false;

  constructor() {}

  async onLogin(name_user: string, password_user: string) {
    const res = await axios.post('/login', {
      name_user,
      pasword_user: password_user,
    });
    return res;
  }

  authenticated() {
    const loggedIn = localStorage.getItem('token');
    loggedIn ? (this.isLogin = true) : (this.isLogin = false);
    return this.isLogin;
  }
  /*
isLogin = false;

      roleAs: string;

      constructor() { }

      login(value: string) {
        this.isLogin = true;
        this.roleAs = value;
        localStorage.setItem('STATE', 'true');
        localStorage.setItem('ROLE', this.roleAs);
        return of({ success: this.isLogin, role: this.roleAs });
      }

      logout() {
        this.isLogin = false;
        this.roleAs = '';
        localStorage.setItem('STATE', 'false');
        localStorage.setItem('ROLE', '');
        return of({ success: this.isLogin, role: '' });
      }

      isLoggedIn() {
        const loggedIn = localStorage.getItem('STATE');
        if (loggedIn == 'true')
          this.isLogin = true;
        else
          this.isLogin = false;
        return this.isLogin;
      }

      getRole() {
        this.roleAs = localStorage.getItem('ROLE');
        return this.roleAs;
      } */
}
