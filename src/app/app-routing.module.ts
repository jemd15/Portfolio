import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ContactComponent } from './pages/contact/contact.component'
import { RepositoriesComponent } from './pages/repositories/repositories.component'

export const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'repositories', component: RepositoriesComponent},
  { path: '**', redirectTo: '/home' }
]