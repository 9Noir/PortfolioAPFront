import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataComponent } from '../data/data.component';
import { Education } from '../../models/education';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent extends DataComponent<Education> implements OnInit {

  constructor(private cs: CrudService, private as: AuthService, private fb: FormBuilder) {
    super(cs, as, fb);
    this.url = "/api/education";
  }
}
