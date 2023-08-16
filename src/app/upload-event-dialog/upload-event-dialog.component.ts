import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-event-dialog',
  templateUrl: './upload-event-dialog.component.html',
  styleUrls: ['./upload-event-dialog.component.css']
})
export class UploadEventDialogComponent {
  title: string = '';
  description: string = '';
  date: string = '';
  price: string = '';
  uploadedFileName: string = '';
  @ViewChild('fileInput') fileInputElement!: ElementRef;

  constructor(public dialogRef: MatDialogRef<UploadEventDialogComponent>, private http: HttpClient) { }

  onFileInput() {
    this.fileInputElement.nativeElement.click();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.uploadedFileName = file.name;
    }
  }

  onSubmit() {
    this.submitEvent();
  }

  submitEvent() {
    if (this.title && this.description && this.date && this.price && this.uploadedFileName) {
      const imageURL = `https://storage.cloud.google.com/webprogramming-images/${this.uploadedFileName}`;
      const body = {
        title: this.title,
        description: this.description,
        date: this.date,
        price: parseFloat(this.price),
        imageUrl: imageURL
      };
      this.http.post('http://localhost:6006/event', body).subscribe(response => {
        console.log(`Event added successfully.`);
        this.dialogRef.close(true);
      },
      error => {
          console.log(`Error: ${error.error.message || 'An unknown error occurred.'}`);
      });

    } else {
      console.log(`All fields are required.`);
    }
  }
}
