import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CartComponent } from './cart/cart.component';
import { EventsComponent } from './events/events.component';
import { ArtisttestComponent } from './artisttest/artisttest.component';
import { VisitComponent } from './visit/visit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { RouterModule } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndividualComponent } from './individual/individual.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { UploadArtworkDialogComponent } from './upload-artwork-dialog/upload-artwork-dialog.component';
import { UploadEventDialogComponent } from './upload-event-dialog/upload-event-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    ShoppingComponent,
    CartComponent,
    EventsComponent,
    ArtisttestComponent,
    VisitComponent,
    LoginComponent,
    RegisterComponent,
    IndividualComponent,
    QuestionComponent,
    QuestionListComponent,
    AboutComponent,
    ContactComponent,
    UploadArtworkDialogComponent,
    UploadEventDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
