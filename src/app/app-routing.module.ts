import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceComponent } from './components/service/service.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

const routes: Routes = [
  { path: "components/about", component: AboutComponent },
  { path: "components/booking", component: BookingComponent },
  { path: "components/contact", component: ContactComponent },
  { path: "components/footer", component: FooterComponent },
  { path: "components/menu", component: MenuComponent },
  { path: "components/navbar", component: NavbarComponent },
  { path: "components/service", component: ServiceComponent },
  { path: "components/spinner", component: SpinnerComponent },
  { path: "components/team", component: TeamComponent },
  { path: "components/testimonial", component: TestimonialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
