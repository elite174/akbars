import { observable, action } from "mobx";

export const PAGES = {
    stat: 'stat',
    map: 'map',
    advices: 'advices',
    competitors: 'competitors'
}

class Store{

    @observable
    page = PAGES.stat

    @action.bound
    changePage(page){
        this.page = page;
    }

}

const store = new Store();

export default store;