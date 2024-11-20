import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { getUniqueId } from '../utils/funtions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    users: Record<string, User>;
    loggedIn: boolean;

    constructor() {
        this.users = { };
        this.loggedIn = localStorage.getItem('authToken') ? true : false;
    }

    login(user: Partial<User>): boolean {
        let currentUser = this.users[user.email!];
        if (currentUser && currentUser.password == user.password) {
            this.loggedIn = true;
            localStorage.setItem('authToken', getUniqueId());
        }
        return this.loggedIn;
    }

    register(newUser: User) {
        this.users[newUser.email] = newUser;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    logout() {
        localStorage.removeItem('authToken');
        this.loggedIn = false;
    }
}
