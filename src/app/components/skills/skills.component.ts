import { Component, Injectable, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from 'src/app/services/crud.service';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent extends DataComponent<Skill> implements OnInit {
  constructor(private cs: CrudService, private as: AuthService, private fb: FormBuilder) {
    super(cs, as, fb);
    this.url = "/api/skill";
  }
}
