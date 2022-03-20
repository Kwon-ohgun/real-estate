import { configure, makeAutoObservable } from 'mobx';

configure({
  // enforceActions: 'never',
  // useProxies: 'never'
});

export default class EstatesStore {
  constructor() {
    makeAutoObservable(this);
  }

  estates = [];
}

export const estatesStore = new EstatesStore();
