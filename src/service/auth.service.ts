import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const NAV_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private baseUrl = 'http://localhost:9090/api/admin/admin';

  constructor(private http: HttpClient) {}

  sendOtp(email: string): Observable<any> {
    return this.http.post(`${NAV_URL}/admin/admin/verifyMail/${email}`, null, {
      responseType: 'text',
    });
  }
  validateOtp(email: string, otp: string): Observable<any> {
    return this.http.post(
      `${NAV_URL}/admin/admin/verifyForgotPasswordOtp?otp=${otp}&userEmail=${email}`,
      null,
      { responseType: 'text' }
    );
  }
  

  resetPassword(email: string, password: string): Observable<any> {
    const body = { password: password };
    return this.http.post(`${NAV_URL}/admin/admin/resetPassword/${email}`, body, {
      responseType: 'text',
    });
  }
}