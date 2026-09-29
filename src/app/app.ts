import { Component } from '@angular/core';
import { PizzaAppComponent } from './pizza-app/containers/pizza-app/pizza-app.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, PizzaAppComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  template: `
    <div class="app">
      <pizza-app></pizza-app>
    </div>
  `,
})
export class App {}
