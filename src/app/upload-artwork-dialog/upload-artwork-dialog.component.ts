import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-upload-artwork-dialog',
  templateUrl: './upload-artwork-dialog.component.html',
  styleUrls: ['./upload-artwork-dialog.component.css']
})
export class UploadArtworkDialogComponent {

  title: string = '';
  description: string = '';
  uploadedFileName: string = '';
  @ViewChild('fileInput') fileInputElement!: ElementRef;

  constructor(public dialogRef: MatDialogRef<UploadArtworkDialogComponent>, private http: HttpClient, private portfolioService: PortfolioService) { }

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
    this.submitArtwork();
  }

  submitArtwork() {
    if (this.title && this.description && this.uploadedFileName) {
      const imageURL = `https://storage.cloud.google.com/webprogramming-images/${this.uploadedFileName}`;
      const body = {
        title: this.title,
        description: this.description,
        imageUrl: imageURL
      };
      this.portfolioService.addPortfolioItem(body).subscribe(response => {
        console.log(`success.`);
        this.portfolioService.fetchPortfolioItems().subscribe();
        this.dialogRef.close();
      },
      error => {
          console.log(`Error: ${error.error.message || 'An unknown error occurred.'}`);
      });

    } else {
      console.log(`All fields are required.`);
    }
  }
}
