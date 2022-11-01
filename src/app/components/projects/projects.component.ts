import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
import { Project } from 'src/app/models/project';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from 'src/app/services/crud.service';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent extends DataComponent<Project> implements OnInit {

  constructor(private cs: CrudService, private as: AuthService, private fb: FormBuilder) {
    super(cs, as, fb);
    this.url = "/api/project";
  }
}