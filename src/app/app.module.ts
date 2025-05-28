import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';
import { APP_CONFIG_TOKEN, IhttpConfig } from './core/environment/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environmentInterceptor } from './core/interceptors/environment.interceptor';
import { SpinnerComponent } from './core/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
    SpinnerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptors([environmentInterceptor])
    ),
    {
      provide: APP_CONFIG_TOKEN,
      useValue: {
        apiUrl: 'http://localhost:3000'
      } as IhttpConfig
    }],
    exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
