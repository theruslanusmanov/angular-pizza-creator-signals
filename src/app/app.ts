import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaAppComponent } from './pizza-app/containers/pizza-app/pizza-app.component';
import { PizzaFormComponent } from './pizza-app/components/pizza-form/pizza-form.component';
import { PizzaCreatorComponent } from './pizza-app/components/pizza-creator/pizza-creator.component';
import { PizzaSizeComponent } from './pizza-app/components/pizza-size/pizza-size.component';
import { PizzaToppingsComponent } from './pizza-app/components/pizza-toppings/pizza-toppings.component';
import { PizzaViewerComponent } from './pizza-app/components/pizza-viewer/pizza-viewer.component';
import { PizzaSummaryComponent } from './pizza-app/components/pizza-summary/pizza-summary.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [
    ReactiveFormsModule,
    PizzaAppComponent,
    PizzaFormComponent,
    PizzaCreatorComponent,
    PizzaSizeComponent,
    PizzaToppingsComponent,
    PizzaViewerComponent,
    PizzaSummaryComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  template: `
    <div class="app">
      <pizza-app></pizza-app>
    </div>
  `,
})
export class App {}
