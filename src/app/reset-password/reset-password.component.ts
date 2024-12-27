import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  confirmPassword: string = '';
  passwordError: string | null = null;

  email: string = '';
  otp: string = '';
  newPassword: string = '';
  step: number = 1; // Step tracker: 1 for email, 2 for OTP, 3 for password
  message: string = '';

  constructor(private authService: AuthService , private router :Router) {}

  sendOtp() {
    this.authService.sendOtp(this.email).subscribe(
      (response) => {
        this.message = response;
        this.step = 2;
      },
      (error) => {
        this.message = error.error;
      }
    );
  }

  validateOtp() {
    this.authService.validateOtp(this.email, this.otp).subscribe(
      (response) => {
        this.message = response;
        this.step = 3;
      },
      (error) => {
        this.message = error.error;
      }
    );
  }

  resetPassword() {
    // Check if passwords match
    if (this.newPassword !== this.confirmPassword) {
      this.passwordError = 'Passwords do not match. Please try again.';
      return;
    }


    // Proceed with the password reset
    this.authService.resetPassword(this.email, this.newPassword).subscribe(
      (response) => {
        alert('Password has been successfully reset.');
      this.router.navigate(['/adminlogin'])
        this.step = 1; // Optionally navigate to a different step or page
      },
      (error) => {
        console.error('Error resetting password:', error);
        alert('Failed to reset password. Please try again.');
        
      }
    );
  }
}