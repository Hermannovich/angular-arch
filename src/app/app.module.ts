import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// External dependencies
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
  MissingTranslationHandler,
} from '@ngx-translate/core';
import { fontAwesomeIcons } from './config/font-awesome-icons';

import { ApplicationConfigService } from './core/config/application-config.service';
import { SharedModule } from './shared/shared.module';
import {
  translatePartialLoader,
  missingTranslationHandler,
} from './config/translation.config';
import { SERVER_API_URL } from './app.constants';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translatePartialLoader,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useFactory: missingTranslationHandler,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    applicationConfigService: ApplicationConfigService,
    iconLibrary: FaIconLibrary
  ) {
    applicationConfigService.setEndpointPrefix(SERVER_API_URL);
    iconLibrary.addIcons(...fontAwesomeIcons);
  }
}
