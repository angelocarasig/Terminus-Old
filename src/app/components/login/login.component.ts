import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VndbService } from 'src/app/services/vndb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authMode: boolean = true;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private vndbService: VndbService,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        userid: ['', Validators.required],
        authkey: ['',  Validators.required],
      }
    );
  }

  onSubmit() {
    console.log("In here");
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm);

    this.loading = true;
    this.vndbService.getAuthInfo(this.loginForm.get('authkey')?.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
