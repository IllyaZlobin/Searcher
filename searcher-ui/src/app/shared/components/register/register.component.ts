import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { AuthenticationService } from './../../../core/services';
import { first } from 'rxjs/operators';
import {
  emailValidator,
} from 'src/app/core/helpers/form-validators';

@Component({
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  formError = false;
  formLoading = false;
  registerForm: FormGroup;
  formLoading = false;
  error = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.setupForm();
  }

  setupForm(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, emailValidator()]],
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });
  }

  submitForm(): void {
    this.formLoading = true;
    const formData = {
      username: this.registerForm.value.username,
      name: this.registerForm.value.name,
      surname: this.registerForm.value.surname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.passwords.password,
    };
    console.log(formData);
    this.authService
      .register(
        formData.email,
        formData.name,
        formData.surname,
        formData.password
      )
      .pipe(first())
      .subscribe(
        (data) => {
          this.authService.setUserData();
          this.router.navigate(['/']);
        },
        (error) => {
          this.error = 'Email or password is invalid, please enter again';
          this.loading = false;
        }
      );
    // this.authService
    //   .login(formData.email, formData.password)
    //   .pipe(first())
    //   .subscribe(
    //     (res) => {
    //       this.router.navigate(['/']);
    //     },
    //     (err) => {
    //       this.formError = true;
    //     }
    //   );
  }
}
