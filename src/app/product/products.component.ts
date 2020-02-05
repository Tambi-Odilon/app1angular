import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent{
  nameProduct = '';
  products = ["book", "food", "pen"];
  numberProduct = 0;
  isDisable = true;

  constructor() { 
    setTimeout(
      ()=>{
        this.isDisable = false
      },
      3000
    )
    this.numberProduct = this.products.length;
  }

  onAddProduct(){
    if(this.nameProduct != ""){
      this.products.push(this.nameProduct);
    this.numberProduct = this.products.length;
    }
    
  }
}
