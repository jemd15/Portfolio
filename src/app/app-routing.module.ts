import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ContactComponent } from './pages/contact/contact.component'
import { RepositoriesComponent } from './pages/repositories/repositories.component'
import { SkillsComponent } from './pages/skills/skills.component'

export const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: 'contact', component: ContactComponent},
    { path: 'repositories', component: RepositoriesComponent},
    { path: 'skills', component: SkillsComponent}
  ]},
  { path: '**', redirectTo: '/home' }
]