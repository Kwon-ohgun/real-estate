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
  enviromento = false;
  webView = null;

  estatesRead() {
    axios.get('https://real-estate-g-default-rtdb.firebaseio.com/congress.json').then((response) => {
      console.log(response);
    });
  }

  toggleEnviromento() {
    this.enviromento = !this.enviromento;
  }
}

export const estatesStore = new EstatesStore();
