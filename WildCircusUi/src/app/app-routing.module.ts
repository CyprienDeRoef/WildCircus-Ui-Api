import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActuComponent } from './actu/actu.component';
import { ContactComponent } from './contact/contact.component';
import { ShowComponent } from './show/show.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: ActuComponent },
  { path: 'store', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'show', component: ShowComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
