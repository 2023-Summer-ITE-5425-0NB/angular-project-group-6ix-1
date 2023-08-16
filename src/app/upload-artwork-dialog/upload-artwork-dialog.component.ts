import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-artwork-dialog',
  templateUrl: './upload-artwork-dialog.component.html',
  styleUrls: ['./upload-artwork-dialog.component.css']
})
export class UploadArtworkDialogComponent {
  title: string = '';
  description: string = '';
  uploadedFileName: string = '';

  constructor(public dialogRef: MatDialogRef<UploadArtworkDialogComponent>) {}

  onFileInput() {
    const fileInput = <HTMLElement>document.querySelector('input[type="file"]');
if (fileInput) {
    fileInput.click();
}
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.uploadedFileName = file.name;
      // Handle the file upload here, maybe emit it to the parent component or directly upload it to the server
    }
  }

  onSubmit() {
    // Handle the form submission logic here.
    // Collect the form data, maybe emit it to the parent component or directly post it to the server.

    // Close the dialog after submission:
    this.dialogRef.close();
  }
}
