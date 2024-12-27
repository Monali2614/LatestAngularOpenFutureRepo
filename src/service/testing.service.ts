import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testing } from 'src/modal/testing';
import { environment } from 'src/environments/environment';


const NAV_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  // private baseUrl = '/api/admin';

  constructor(private http: HttpClient) {}

  saveAdmin(adminData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set the content type
    });
    return this.http.post(`${NAV_URL}/admin/register`, adminData, { headers });
  }

  getAllAdmins(): Observable<Testing[]> {
    return this.http.get<Testing[]>(`${NAV_URL}/admin/all`);
  }

  updateAdmin(adminId: number, adminData: FormData): Observable<any> {
    // HttpHeaders removed as Angular handles multipart form data automatically
    return this.http.put(`${NAV_URL}/admin/update/${adminId}`, adminData);
  }

  deleteAdmin(adminId: number): Observable<any> {
    return this.http.delete(`${NAV_URL}/admin/delete/${adminId}`);
  }
}
