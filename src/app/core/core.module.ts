import { NgModule, SkipSelf, Optional } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from '../utils/svg.util';

@NgModule({
  imports: [
    // CommonModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf()
    parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('核心模块不能重复加载');
    }
    loadSvgResources(ir, ds);
  }
}
