import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog-list/blog/blog.component';
import { BlogDescriptionComponent } from './blog-list/blog-description/blog-description.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    MainsectionComponent,
    BlogListComponent,
    BlogComponent,
    BlogDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: BlogListComponent },
      { path: 'blogs', redirectTo: '', pathMatch: 'full'},
      { path: 'about', component: AboutComponent},
      { path: '**', redirectTo: '', pathMatch: 'full'}   
  ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
