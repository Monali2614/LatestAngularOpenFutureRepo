import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from 'src/modal/news';
import { environment } from 'src/environments/environment';


const NAV_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root',
})
export class NewsService
{
   // private baseUrl = '/api/News'; // Replace with your backend URL

   constructor(private http: HttpClient) {}

   // Save News
   saveNews(news: News): Observable<News> {
     const headers = new HttpHeaders({
       'Content-Type': 'application/json', // Set the content type
     });
     return this.http.post<News>(`${NAV_URL}/News/SaveNews`, news, { headers });
   }
 
   // Get News by ID
   getNewsById(id: number): Observable<News> {
     return this.http.get<News>(`${NAV_URL}/News/getNewsById/${id}`);
   }
 
   // Get All News
   getAllNews(): Observable<News[]> {
     return this.http.get<News[]>(`${NAV_URL}/News/allnews`);
   }
 
   // Get News by Admin ID
   getNewsByAdminId(adminId: number): Observable<News> {
     return this.http.get<News>(`${NAV_URL}/News/getNewsByAdminId/${adminId}`);
   }
 
   // Update News
   updateNews(newsId: number, news: News): Observable<News> {
     const headers = new HttpHeaders({
       'Content-Type': 'application/json', // Set the content type
     });
     return this.http.put<News>(`${NAV_URL}/News/update/${newsId}`, news,{headers});
   }
 
   // Delete News
   deleteNews(newsId: number): Observable<void> {
     return this.http.delete<void>(`${NAV_URL}/News/delete/${newsId}`
     );
   }
 
  } 