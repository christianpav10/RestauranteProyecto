import { Injectable } from '@angular/core';
import {UserModel} from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: UserModel;


  constructor() { }
  login(user: UserModel): boolean {
    if (user.email === 'cristian@hotmail.com' && user.password === '12345') {
        return true;
    }
    return false;
}

}
