import { ModuleWithProviders, NgModule } from '@angular/core';
import { QuoteService } from './quote.service';

@NgModule({
  imports: [],
  declarations: []
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService
      ]
    };
  }
}
