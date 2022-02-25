import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LiensutilesComponent } from './liensutiles/liensutiles.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PlanningComponent } from './planning/planning.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'liensutiles', component: LiensutilesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
