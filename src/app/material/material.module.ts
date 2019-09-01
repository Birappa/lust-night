import { NgModule } from '@angular/core';
import {MatToolbarModule,MatIconModule} from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';

const materials = [MatToolbarModule,MatIconModule, MatCarouselModule]
@NgModule({
imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
