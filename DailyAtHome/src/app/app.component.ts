import { Component } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';
@Component({
    selector: 'my-app',
    template: `<div>
<dah-header></dah-header>
</div>`,
})
export class AppComponent { name = 'Angular'; }
