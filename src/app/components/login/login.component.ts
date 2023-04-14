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

  // Toggles authMode value depending on if the currrent mode value in the formGroup is 'Auth'
  onModeChange(): void {
    this.authMode = this.loginForm.get('mode')?.value === 'Auth';
  }

  // Check if the current mode is 'Auth'
  private isAuthMode(): boolean {
    return this.loginForm.get('mode')?.value === 'Auth';
  }

  /**
   * Performs validation checks and calls functions to verify user and auth details
   * (if applicable) before attempting to retrieve the user's visual novel list.
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

    this.getVisualNovelList(this.loginForm.get('userid')?.value);

    this.errorMsg = '';
    this.loading = false;
  }

  /**
   * Retrieves the user's visual novel list and logs the IDs.
   * @param {string} userid - The user's ID.
   * @returns {void}
   */
  getVisualNovelList(userid: string) {
    try {
      const vnIDs = this.vndbService.getUserVisualNovelList(userid);
      if (vnIDs) {
        console.log('Visual Novel IDs:', vnIDs);
      } else {
        console.log('Invalid user ID');
      }
    } catch (error) {
      console.error('Error getting visual novel list:', error);
    }
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
      this.setFormErrors("Some Parameters Are Empty");
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
    const useridValue = this.loginForm.get('userid')?.value;
    const usernameValue = this.loginForm.get('username')?.value;

    this.vndbService.getUser(useridValue, usernameValue).subscribe({
      next: (isValid) => {
        if (!isValid) {
          this.setFormErrors("Login Details Are Invalid");
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  /**
   * Verifies the user's api token details by calling the getAuthInfo method of the VndbService.
   * If the api token is invalid, sets an error message.
   * @returns {void} This function does not return anything.
   */
  private verifyAuthDetails(): void {
    const apitokenValue = this.loginForm.get('apitoken')?.value;

    if (!apitokenValue) {
      this.setFormErrors("API Token Is Empty");
      return;
    }

    if (this.vndbService.getAuthInfo(apitokenValue).length <= 0) {
      console.log("Empty permissions!");
    }
    else {
      console.log("Permissions included!");
    }
  }

  /**
   * Sets error messages for the form and its controls.
   * @param {string} errorMsg - The error message to be displayed.
   * @returns {void}
   */
  private setFormErrors(errorMsg: string): void {
    this.errorMsg = errorMsg;

    if (this.isAuthMode()) {
      this.loginForm.controls['apitoken'].setErrors({ invalid: true });
    } else {
      this.loginForm.controls['userid'].setErrors({ invalid: true });
      this.loginForm.controls['username'].setErrors({ invalid: true });
    }
  }
}