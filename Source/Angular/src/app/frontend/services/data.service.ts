import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  money = new BehaviorSubject<any>(0);
  currentMoney = this.money.asObservable();

  check = new BehaviorSubject<boolean>(true);
  currentCheck = this.check.asObservable();

  // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource

  constructor() { }

  // method này để change source message
  changeCheck(value:any) {
    this.check.next(value);
  }
  changeMoney(value:any) {
    this.money.next(value);
  }
}
