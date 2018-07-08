import { NgModule,Optional,SkipSelf } from '@angular/core';
import{SharedModule} from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import{HttpModule}from '@angular/http';
import{ MdIconRegistry} from '@angular/material';
import{DomSanitizer} from '@angular/platform-browser';
import{loadSvgResources}from '../utils/svg.util';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent    
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule { 
  constructor(
    @Optional() @SkipSelf() parent:CoreModule,
    iconRegistry:MdIconRegistry,
    domSanitizer:DomSanitizer
     ){
    if(parent){
      throw new Error("模块已加载");
    }
    loadSvgResources(iconRegistry,domSanitizer);
  }
}
