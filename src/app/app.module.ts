import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { FillerFormComponent } from './task-manager/filler-form/filler-form.component';
import { TableAreaComponent } from './task-manager/table-area/table-area.component';
import { TableAreaCardComponent } from './shared-components/cards/table-area-card/table-area-card.component';
import { TaskManagerService } from './shared-services/task-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    FillerFormComponent,
    TableAreaComponent,
    TableAreaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TaskManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
