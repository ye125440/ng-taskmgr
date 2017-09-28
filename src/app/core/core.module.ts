import { NgModule, SkipSelf, Optional } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpModule } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResource } from '../utils/svg.util';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import 'rxjs/add/operator/take';
import { ServicesModule } from '../services/services.module';
import '../utils/debug.util';

@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    BrowserAnimationsModule // 该模块放在最后导入
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'BASE_CONFIG', useValue: {
        uri: 'http://localhost:3000'
      }
    }
  ]
})
// 核心模块 只加载一次
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer
    ) {
    if (parent) {
      throw new Error('模块已存在，不能再次加载！');
    }
    // 解决装载资源分散、重复加载的问题
    // 选择放在 coreModule 是因为该模块只会加载一次
    loadSvgResource(ir, ds);
  }
}
