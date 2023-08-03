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
import { FormsModule } from '@angular/forms';
import { IndividualComponent } from './individual/individual.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HttpClientModule } from '@angular/common/http';



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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
