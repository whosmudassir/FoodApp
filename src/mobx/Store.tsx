import {action, computed, makeObservable, observable} from 'mobx';

export class Store {
  cart = [];

  constructor() {
    makeObservable(this, {
      cart: observable,
      addToCart: action,
      deleteFromCart: action,
      itemInc: action,
      itemDec: action,
      total: computed,
    });
  }

  addToCart(item) {
    item.quantity = 1;
    item.id = Math.random().toFixed(4);
    item.mainPrice = item.price;
    this.cart.push(item);
  }

  deleteFromCart(removedItem) {
    this.cart = this.cart.filter(item => {
      console.log(item);
      return item !== removedItem;
    });
    console.log(this.cart);
  }

  itemInc(id, price) {
    this.cart.map(item => {
      if (item.id === id) {
        item.quantity = ++item.quantity;
        item.price = item.price + price;
      }
    });
  }

  itemDec(id, price) {
    this.cart.map(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          item.quantity = --item.quantity;
          item.price = item.price - price;
        }
      }
    });
  }

  get total() {
    return this.cart.reduce((acc, curr) => acc + Number(curr.price), 0);
  }
}

export const cartStore = new Store();
