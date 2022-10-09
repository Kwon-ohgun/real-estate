import { configure, makeAutoObservable } from 'mobx';
import axios from 'axios';
 
configure({
  enforceActions: 'never',
  // useProxies: 'never'
});

export default class CongressesStore {
  constructor() {
    makeAutoObservable(this);
  }

  congresses = [];
  enviromento = false;
  webView = null;

  congressesRead() {
    axios.get('https://real-estate-g-default-rtdb.firebaseio.com/congresses.json').then((response) => {
      response.data.forEach((congress) => {
        congress.congressAll = [].concat(congress.assetsMy || [], congress.assetsMyRelative || []);
      });
      this.congresses = response.data;
    });
  }

  toggleEnviromento() {
    this.enviromento = !this.enviromento;
  }
}

export const congressesStore = new CongressesStore();
