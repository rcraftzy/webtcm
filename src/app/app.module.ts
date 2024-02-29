import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { TopnavbarComponent } from './widgets/topnavbar/topnavbar.component';
import { HttpClientModule } from '@angular/common/http';
import { GtaComponent } from './views/gta/gta.component';
import { RoutingComponent } from './app-routing.component';
import { LoginComponent } from './admin/login/login.component';
import { WebsiteComponent } from './views/website/website.component';
import { MainComponent } from './admin/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutingComponent,
    FooterComponent,
    TopnavbarComponent,
    GtaComponent,
    LoginComponent,
    WebsiteComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
