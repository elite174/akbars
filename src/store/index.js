import { observable } from "mobx";

class Store{

    @observable
    id
}

const store = new Store();

export default store;