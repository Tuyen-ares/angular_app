import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductItem } from '../shared/Product-item/product.item';
// import { FormsModule, NgForm } from '@angular/forms';
// import { CurrencyPipe } from '../shared/header-layout/Pipes/CurrencyPipe.pipe';
// import { UpperCasePipe } from '../shared/header-layout/Pipes/UpperCasePipe';
// import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports:    [RouterOutlet,ProductItem],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  //protected readonly title = signal('angular-basic-project');
  nameBtn = 'Click me button';
  bindingMess = '';
  isDisable = false;
  thisMessage='';

  handleDelete = (id: string)=> {
    const index = this.products.findIndex(item=> item.id == id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
products = [
  { id:'1', name: 'Sampa OG', price: 4000000, image: '/assets/images/samba.jpg' },
  { id:'2', name: 'Nike',     price: 45000000, image: '/assets/images/samba.jpg' },
  { id:'3', name: 'Tuyên',    price: 7000000, image: '/assets/images/samba.jpg' },
  { id:'4', name: 'MVP',      price: 9000000, image: '/assets/images/samba.jpg' }
];
  handleClickme() {
    this.thisMessage = 'Hello everyone';
  }


}
