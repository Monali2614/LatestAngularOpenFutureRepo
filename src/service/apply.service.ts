import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


const NAV_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApplyService {


  constructor(private http: HttpClient) {}

  /**
   * Save Form Data
   * @param formData - Form data to be saved
   * @returns Observable<any>
   */
  saveForm(formData: FormData): Observable<any> {
    const url = `${NAV_URL}/forms/form/saveForm`; // Complete endpoint for saving form
    return this.http.post(url, formData).pipe(
      catchError(this.handleError) // Apply error handling
    );
  }

  /**
   * Retrieve all forms
   * @returns Observable<any>
   */
  getAllForms(): Observable<any> {
    const url = `${NAV_URL}/admin/form/getAllForms`; // Complete endpoint for retrieving all forms
    return this.http.get(url).pipe(
      catchError(this.handleError) // Apply error handling
    );
  }

  /**
   * Error Handling
   * @param error - HTTP error response
   * @returns Observable<never>
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server Error: Code ${error.status}, Message: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}