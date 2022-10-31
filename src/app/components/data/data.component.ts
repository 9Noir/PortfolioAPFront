import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from 'src/app/services/crud.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent<T> implements OnInit {
  protected url: string;
  protected t: any;
  protected list: T[];
  protected idEdit: number;
  protected isAddFormActive = false;
  protected form: FormGroup;

  constructor(private crudService: CrudService, protected authService: AuthService, protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAll();
  }

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  islogged = () => this.authService.loggedIn();

  onSubmit(event: Event) {
    event.preventDefault;
    this.authService
      .login(this.form.value)
      .subscribe((data) => {
      });
  }

  public toggleAdd() {
    return this.isAddFormActive = !this.isAddFormActive;
  }

  public toggleEdit(id: number) {
    this.idEdit = id;
  }

  public getAll(): void {
    this.crudService.getAll(this.url).subscribe((data) => {
      this.list = data;
    })
  }

  public save(t: any) {
    this.crudService.save(this.url, t).subscribe({
      next: () => {
        this.getAll()
      }
    })
  }

  public update(t: T) {
    this.crudService.update(this.url, t).subscribe({
      next: () => {
        this.getAll()
      }
    })
  }

  public delete(id: number) {
    this.crudService.delete(this.url, id).subscribe({
      next: () => {
        this.getAll()
      }
    })
  }
}
