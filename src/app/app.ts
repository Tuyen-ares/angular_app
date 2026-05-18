import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CurrencyPipe } from './shared/header-layout/Pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './shared/header-layout/Pipes/UpperCasePipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderLayoutComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


}
