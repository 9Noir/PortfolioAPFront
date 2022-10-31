import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './components/skills/skills.component';
import { DataComponent } from './components/data/data.component';
import { EducationsComponent } from './components/educations/educations.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    DataComponent,
    EducationsComponent,
    AboutComponent,
    ExperiencesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
