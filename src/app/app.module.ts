// Angular Stuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';

// Components / Routing
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { SettingsComponent } from './shared/settings/settings.component';

// Library Modules
import { DividerModule } from 'primeng/divider';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookshelfComponent,
    NavbarComponent,
    BookCardComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // PrimeNG
    DividerModule,

    CardModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    PasswordModule,
    ButtonModule,
    TooltipModule,
    SidebarModule,
    MenubarModule,
    ImageModule,
    ScrollPanelModule,
    TabMenuModule
  ],
  providers: [{ provide: 'environment', useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
