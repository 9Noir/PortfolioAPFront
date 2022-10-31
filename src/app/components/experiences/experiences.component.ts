import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from 'src/app/services/crud.service';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent extends DataComponent<Experience> implements OnInit {

  constructor(private cs: CrudService, private as: AuthService, private fb: FormBuilder) {
    super(cs, as, fb);
    this.url = "/api/experience";
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
}
