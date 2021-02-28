import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from 'src/app-routing.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { PartsComponent } from './components/parts/parts.component';
import { HomeComponent } from './components/home/home.component';
import { TextFilterPipe } from './components/suppliers/text-filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuppliersComponent,
    LoginComponent,
    PartsComponent,
    HomeComponent,
    TextFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment),
    AppRoutingModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
