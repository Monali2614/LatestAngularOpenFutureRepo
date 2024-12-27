import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Contact } from 'src/modal/contact';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const NAV_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})



export class ContactService {

/// API URL for the backend

//  private apiUrl = '/api/contacts'; // Adjust this based on your backend URL

constructor(private http: HttpClient) {}

// Create a new contact
createContact(contact: Contact): Observable<Contact> {
  return this.http.post<Contact>(`${NAV_URL}/contacts/save`, contact, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  });
}

// Get all contacts
getAllContacts(): Observable<Contact[]> {
  return this.http.get<Contact[]>(`${NAV_URL}/contacts/all`);
}

// Get a contact by ID
getContactById(id: number): Observable<Contact> {
  return this.http.get<Contact>(`${NAV_URL}/contacts/getById/${id}`);
}

// Update a contact by ID
updateContact(id: number, contact: Contact): Observable<Contact> {
  return this.http.put<Contact>(`${NAV_URL}/contacts/Update/${id}`, contact, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  });
}

// Delete a contact by ID
deleteContact(id: number): Observable<void> {
  return this.http.delete<void>(`${NAV_URL}/contacts/Delete/${id}`);
}
}
