import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ParentComponent} from './components/parent/parent.component';
import {InterpolationComponent} from './components/interpolation/interpolation.component';
import {ChildComponent} from './components/child/child.component';
import {AttributeComponent} from './components/attribute/attribute.component';
import {ClassBindingComponent} from './components/class-binding/class-binding.component';
import {StyleBindingComponent} from './components/style-binding/style-binding.component';
import {EventBindingComponent} from './components/event-binding/event-binding.component';
import {TwoWayBindingComponent} from './components/two-way-binding/two-way-binding.component';
// FormsModule is important in order to use the ngModel in our two-way-binding component
import {FormsModule} from "@angular/forms";
import { HostBindingComponent } from './components/host-binding/host-binding.component';
import { HostDemoDirective } from './directives/host-demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    InterpolationComponent,
    ChildComponent,
    AttributeComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    HostBindingComponent,
    HostDemoDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
