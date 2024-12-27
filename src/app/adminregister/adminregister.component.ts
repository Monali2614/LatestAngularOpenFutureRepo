import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Admin } from 'src/modal/admin.model';
import { AdminService } from 'src/service/admin.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  adminForm!: FormGroup;
  profilePicture!: File;
  passwordVisible: boolean = false; // Password visibility toggle

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      mobileNo: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.profilePicture = file;
    } else {
      alert('Please select a valid image file.');
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(): void {
    if (this.adminForm.valid) {
      const admin: Admin = this.adminForm.value;

      this.adminService.registerAdmin(admin, this.profilePicture).subscribe(
        (response) => {
          console.log(response);
          alert('Admin registered successfully');
          this.router.navigate(['/adminlogin']);
        },
        (error) => {
          console.error(error);
          alert('Failed to register admin');
        }
      );
    } else {
      alert('Please correct the errors in the form.');
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/adminlogin']);
  }
}
