import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { About } from 'src/app/models/about';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from 'src/app/services/crud.service';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends DataComponent<About> implements OnInit {
  protected isLogFormActive = false;

  constructor(private cs: CrudService, private as: AuthService, private fb: FormBuilder) {
    super(cs, as, fb);
    this.url = "/api/about";
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  toggleLogForm() {
    this.isLogFormActive = !this.isLogFormActive;
  }
}
