import { Component, EventEmitter, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute , RouterLink, RouterOutlet} from '@angular/router';
import { CurrencyPipe } from '../header-layout/Pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../header-layout/Pipes/UpperCasePipe';
import { CommonModule } from '@angular/common';
import { ProductItems } from '../types/product.item';
import { Input } from '@angular/core';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CurrencyPipe,UpperCasePipe,CommonModule,RouterLink],
  templateUrl: './product.item.html',
  styleUrl: './product.item.css'
})
export class ProductItem implements OnChanges{
 
  @Input() products : ProductItems[] = [];

  @Output() dataEvent = new EventEmitter<string>();

  ngOnChanges(changes : SimpleChanges): void {
    console.log(changes['products'].currentValue);
    console.log(changes['products'].previousValue);
  }

  ngOnDestroy(): void {
    console.log('product item component destroyed');
  }
  get totalPrice() : number {
    return this.products.reduce((total, item) => total + item.price, 0);
  }
  handleDelete(id: string) {
    this.dataEvent.emit(id);
  }
}


