import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../store/product.model';
import * as Cart from '../store/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent {
  cart: Observable<Array<any>>;
  constructor(private store: Store<any>) { 
    this.cart = this.store.select('cart');
  } 
  
  removeFromCart(product: Product) {
    this.store.dispatch(new Cart.RemoveProductAction(product));
  }
}
