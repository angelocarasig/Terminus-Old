import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VndbService } from 'src/app/services/vndb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    mode: new FormControl('', Validators.required),
    userid: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    authkey: new FormControl('')
  });

  constructor(private vndbService: VndbService) { };

  modes = [ 'Basic', 'Auth' ];

  authMode = false;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    

    const authkeyValue = this.loginForm.get('authkey')?.value;
    if (authkeyValue == null) {
      return;
    }

    this.vndbService.getAuthInfo(authkeyValue).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onModeChange() {
    if (this.loginForm.get('mode')?.value === 'Auth') {
      this.authMode = true;
    } else {
      this.authMode = false;
    }
  }
}
