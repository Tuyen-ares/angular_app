import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CurrencyPipe } from '../shared/header-layout/Pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../shared/header-layout/Pipes/UpperCasePipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,HeaderLayoutComponent,FormsModule,CurrencyPipe,UpperCasePipe,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  //protected readonly title = signal('angular-basic-project');
  nameBtn = 'Click me button';
  bindingMess = '';
  isDisable = false;
  thisMessage='';
products = [
  { name: 'Sampa OG', price: 4000000, image: '/assets/images/samba.jpg' },
  { name: 'Nike',     price: 45000000, image: '/assets/images/samba.jpg' },
  { name: 'Tuyên',    price: 7000000, image: '/assets/images/samba.jpg' },
  { name: 'MVP',      price: 9000000, image: '/assets/images/samba.jpg' }
];
  handleClickme() {
    this.thisMessage = 'Hello everyone';
  }


}
