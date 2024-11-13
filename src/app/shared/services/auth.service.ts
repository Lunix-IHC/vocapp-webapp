import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    users: Record<string, User>;
    loggedIn: boolean;

    constructor() {
        this.users = { };
    }

    login(user: Partial<User>): boolean {
        let currentUser = this.users[user.email!];
        if (currentUser && currentUser.password == user.password) {
            this.loggedIn = true;
        }
        return this.loggedIn;
    }

    register(newUser: User) {
        this.users[newUser.email] = newUser;
    }

    isLoggedIn(): boolean {
        // return !!localStorage.getItem('authToken');
        return true
    }
}
