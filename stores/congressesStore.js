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
  isLoading = false;

  congressesRead(word) {
    console.log(word)
    this.isLoading = true;
    axios.get('https://real-estate-g-default-rtdb.firebaseio.com/congresses.json').then((response) => {
      const congresses = []
      response.data.forEach((congress) => {
        // 검색 조건
        if (!word || (congress.name.includes(word) || congress.team.includes(word))) {
          congress.congressAll = [].concat(congress.assetsMy || [], congress.assetsMyRelative || []);
          congresses.push(congress)
        }
      });
      this.congresses = congresses;
      this.isLoading = false;
    });
  }

  toggleEnviromento() {
    this.enviromento = !this.enviromento;
  }
}

export const congressesStore = new CongressesStore();
