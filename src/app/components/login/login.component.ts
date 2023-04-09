import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VndbService } from './../../services/vndb/vndb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authMode: boolean;
  submitted: boolean;
  loading: boolean;
  validLoginDetails: boolean;
  errorMsg = '';
  readonly modes: Array<string> = ['Basic', 'Auth'];

  constructor(private vndbService: VndbService) {}

  ngOnInit(): void {
    this.initLoginForm();

    this.authMode = false;
    this.submitted = false;
    this.loading = false;
    this.validLoginDetails = false;
  }

  private initLoginForm(): void {
    this.loginForm = new FormGroup({
      mode: new FormControl(null, Validators.required),
      userid: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      apitoken: new FormControl(null),
    });
  }

  // Toggles authmode value depending on if the currrent mode value in the formGroup is 'Auth'
  onModeChange(): void {
    this.authMode = this.loginForm.get('mode')?.value === 'Auth';
  }

  private isAuthMode(): boolean {
    return this.loginForm.get('mode')?.value === 'Auth';
  }

  /**
   * Validation checks before emitting username, userid and permissions to the loginService if valid.
   * 1. Check if the login form matches formBuilder restrictions
   * 2. Verify in vndbService if the details are valid
   * 3. Checks if authMode is enabled
   * 3.5. Verifies authentication key details are valid
   * 4. Emit results to loginService
   * @returns void
   */
  onSubmit(): void {
    this.submitted = true;
    this.loading = true;

    if (!this.validateLoginForm()) {
      this.loading = false;
      return;
    }

    this.verifyUser();

    if (this.isAuthMode()) {
      this.verifyAuthDetails();
    }

    this.errorMsg = '';

    //TODO: Store the user's login details in the browser's local storage
    //TODO: Save auth permissions in array if auth
    //TODO: Emit the user's login details to the loginService
    
    console.log(this.vndbService.getVnList(this.loginForm.get('userid')?.value, 1));

    this.loading = false;
  }

  /**
   * Validates the login form to ensure that the required fields (mode, userid, and username)
   * are not empty.
   * @returns {boolean} A boolean value indicating whether the form is valid or not (true if valid, false if invalid).
   */
  private validateLoginForm(): boolean {
    // Retrieve the values of the mode, userid, and username form controls
    const modeValue = this.loginForm.get('mode')?.value;
    const useridValue = this.loginForm.get('userid')?.value;
    const usernameValue = this.loginForm.get('username')?.value;

    // Check if any of the retrieved values are falsy
    if (!modeValue || !useridValue || !usernameValue) {
      // Set the errorMsg property of the component to "Some parameters are empty"
      this.errorMsg = 'Some Parameters Are Empty';
      if (this.isAuthMode()) {
        this.setAuthKeyError("Some Parameters Are Empty");
      }
      return false;
    }

    // All required fields are present, form is valid
    return true;
  }
  
  /**
   * Verifies the user's login details by calling the getUser method of the VndbService.
   * If the login details are invalid, sets an error message.
   * @returns {void} This function does not return anything.
   */
  private verifyUser(): void {
    // Retrieve the values of the userid and username form controls
    const useridValue = this.loginForm.get('userid')?.value;
    const usernameValue = this.loginForm.get('username')?.value;

    // Call the getUser method of the VndbService to verify the user's login details
    this.vndbService.getUser(useridValue, usernameValue).subscribe({
      next: (response) => {
        // If the login details are invalid, set an error message
        if (!this.verifyLoginDetails(response)) {
          this.setLoginErrors("Login Details Are Invalid");
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  private verifyLoginDetails(response: any): boolean {
    const useridValue = this.loginForm.get('userid')?.value;
    const usernameValue = this.loginForm.get('username')?.value;

    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        const user = response[key];
        if (user == null) {
          return false;
        }
        if (user.username !== usernameValue || user.id !== `u${useridValue}`) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Verifies the user's api token details by calling the getAuthInfo method of the VndbService.
   * If the api token is invalid, sets an error message.
   * @returns {void} This function does not return anything.
   */
  private verifyAuthDetails(): void {
    // Retrieve the value of the authkey form control
    const apitokenValue = this.loginForm.get('apitoken')?.value;

    // If the api token is empty, set an error message and return early
    if (!apitokenValue) {
      this.setAuthKeyError("API Token Is Empty");
      return;
    }

    // Call the getAuthInfo method of the VndbService to verify the api token
    this.vndbService.getAuthInfo(apitokenValue).subscribe({
      next: (response) => {
        // If the api token is valid, log a success message
        if (this.verifyAuthDetailsResponse(response)) {
          console.log('Successful!');
        } else {
          console.log('Invalid...');
        }
      },
      error: (error) => {
        this.setAuthKeyError("Invalid API Token");
      },
    });
  }

  private verifyAuthDetailsResponse(response: any): boolean {
    const useridValue = this.loginForm.get('userid')?.value;
    const usernameValue = this.loginForm.get('username')?.value;
    let result = true;
    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        result = this.processAuthDetailsResponse(key,response[key], useridValue, usernameValue);
        if (!result) break;
      } else {
        result = false;
      }
    }
    return result;
  }

  private processAuthDetailsResponse(key: string, value: any, userid: string, username: string): boolean {
    switch (key) {
      case 'permissions':
        value.forEach((element: any) => {
          console.log(element);
        });
        break;
      case 'username':
        if (value !== username) {
          return false;
        }
        break;
      case 'id':
        if (value !== `u${userid}`) {
          return false;
        }
        break;
      default:
        return false;
    }
    return true;
  }

  private setLoginErrors(errorMsg: string): void {
    this.loginForm.controls['userid'].setErrors({ invalid: true });
    this.loginForm.controls['username'].setErrors({ invalid: true });
    if (this.isAuthMode()) {
      this.setAuthKeyError(errorMsg);
    }
    else {
    this.errorMsg = errorMsg;
    }
    this.validLoginDetails = false;
  }

  private setAuthKeyError(errorMsg: string): void {
    this.loginForm.controls['apitoken'].setErrors({ invalid: true });
    this.errorMsg = errorMsg;
    this.loading = false;
  }
}
