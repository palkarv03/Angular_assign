import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TableComponent } from "./tables/tables.component";
import { tableDetails } from "./tables/tables";
import { GenderComponent } from "./MaleFemale/gender.component";
import { HeartComponent } from "./Heart/heart.componenet";
import { ProductComponent } from "./Product/product.component";
import { lorempixelComponent } from "./Pipes/pipes.component";
import { ChildComponent } from "./bind/child.component";
import { ListComponent } from "./list/list.component";
import { TwitterComponent } from "./twitter/twitter.component";
import { AcComponent } from './ac/ac.component';
import { ElectonicComponent } from './electonic/electonic.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { LaptopComponent } from './laptop/laptop.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderComponent,
    TableComponent,
    HeartComponent,
    ProductComponent,
    lorempixelComponent,
    ChildComponent,
    ListComponent,
    TwitterComponent,
    AcComponent,
    ElectonicComponent,
    MobileComponent,
    TvComponent,
    LaptopComponent,
    DropdownComponent,
    TestingComponent
  ],

  imports: [BrowserModule],

  providers: [tableDetails],

  bootstrap: [AppComponent]
})
export class AppModule {}
