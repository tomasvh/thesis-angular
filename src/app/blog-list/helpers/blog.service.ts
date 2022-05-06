import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable';
import { IBlog } from './blog';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    private blogURL = 'assets/blogs.json';

    constructor(private http: HttpClient) {

    }

    getBlogs(): Observable<IBlog[]> {
        return this.http.get<IBlog[]>(this.blogURL).pipe(
            tap(), catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error.instanceOf(ErrorEvent)) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}