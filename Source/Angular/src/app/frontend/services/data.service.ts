import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { UserDashboard } from '../models/userDashboard';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  check = new BehaviorSubject<boolean>(true);
  currentCheck = this.check.asObservable();

  user = new BehaviorSubject<any>({});
  currentUser = this.user.asObservable();



  // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource
  constructor() { }

  // method này để change source message
  changeCheck(value:any) {
    this.check.next(value);
  }

  getCurentUser(user:any) {
    this.user.next(user);
  }
}
