import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product = {
    name: '',
    price: null,
    imagelink: '',
    buylink: ''
  };

  private apiUrl = 'http://localhost:8080/addproducts'; // Your backend URL

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post(this.apiUrl, this.product).pipe(
      tap(response => {
        console.log('Product added:', response);
        // Optionally, reset the form or provide user feedback
      }),
      catchError(error => {
        console.error('Error adding product:', error);
        // Handle error appropriately
        return of(null); // Return an empty observable to complete the stream
      })
    ).subscribe();
  }
}
