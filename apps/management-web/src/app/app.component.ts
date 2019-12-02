import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@nx-test/web';

@Component({
  selector: 'nx-test-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
