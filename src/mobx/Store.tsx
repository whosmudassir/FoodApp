import {action, makeObservable, observable} from 'mobx';

export class Store {
  cart = [];

  constructor() {
    makeObservable(this, {
      cart: observable,
      addToCart: action,
      deleteFromCart: action,
    });
  }

  addToCart(item) {
    this.cart.push(item);
  }

  deleteFromCart(removedItem) {
    this.cart = this.cart.filter(item => {
      console.log(item);
      return item !== removedItem;
    });
    console.log(this.cart);
  }
}

export const cartStore = new Store();
