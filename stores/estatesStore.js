import { configure, makeAutoObservable } from 'mobx';
import axios from 'axios';
 
configure({
  // enforceActions: 'never',
  // useProxies: 'never'
});

export default class EstatesStore {
  constructor() {
    makeAutoObservable(this);
  }

  estates = [];

  estatesRead() {
    axios.get('https://real-estate-g-default-rtdb.firebaseio.com/estates.json').then((response) => {
      console.log(response);
    });
  }
}

export const estatesStore = new EstatesStore();
