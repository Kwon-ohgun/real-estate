import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  user = {};

  setUser(user) {
    this.user = user;
  }
}

export const userStore = new UserStore();
