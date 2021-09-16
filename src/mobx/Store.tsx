import {action, makeObservable, observable} from 'mobx';

export class Store {
  cart = [];

  constructor() {
    makeObservable(this, {
      cart: observable,
      addToCart: action,
      deleteFromCart: action,
      itemInc: action,
      itemDec: action,
    });
  }

  addToCart(item) {
    item.quantity = 1;
    item.id = Math.random().toFixed(4);
    this.cart.push(item);
  }

  deleteFromCart(removedItem) {
    this.cart = this.cart.filter(item => {
      console.log(item);
      return item !== removedItem;
    });
    console.log(this.cart);
  }

  itemInc(id) {
    this.cart.map(item => {
      if (item.id === id) {
        item.quantity = ++item.quantity;
      }
    });
  }

  itemDec(id) {
    this.cart.map(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          item.quantity = --item.quantity;
        }
      }
    });
  }
}

export const cartStore = new Store();
