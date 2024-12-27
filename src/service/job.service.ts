import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from 'src/modal/job';
import { environment } from 'src/environments/environment';

const NAV_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class JobService {
 searchJobs(filters: any) {
   throw new Error('Method not implemented.');
 }

 // private apiUrl = '/api/jobs'; 

 constructor(private http: HttpClient) {}

 createJob(job: Job): Observable<Job> {
   return this.http.post<Job>(`${NAV_URL}/jobs/job/saveJobs`, job, {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     }),
   });
 }

 getJobs(): Observable<Job[]> {
   return this.http.get<Job[]>(`${NAV_URL}/jobs/job/getAllJobs`);
 }

 getJobById(id: number): Observable<Job> {
   return this.http.get<Job>(`${NAV_URL}/jobs/getById/${id}`);
 }

 updateJob(id: number, job: Job): Observable<Job> {
   return this.http.put<Job>(`${NAV_URL}/jobs/job/updateJob/${id}`, job, {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     }),
   });
 }

 deleteJob(id: number): Observable<string> {
   return this.http.delete<string>(`${NAV_URL}/jobs/job/deleteJobById/${id}`, {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     }),
     responseType: 'text' as 'json' // Specify that we expect a text response
   });
 }

}

