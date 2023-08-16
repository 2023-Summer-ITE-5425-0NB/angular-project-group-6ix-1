import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';
import { MatDialog } from '@angular/material/dialog';
import { UploadArtworkDialogComponent } from '../upload-artwork-dialog/upload-artwork-dialog.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private router: Router, private portfolioService: PortfolioService, private dialog: MatDialog) { }

  showModal = false;
  currentDescription = '';
  currentIndex: number | null = null;

  get jsonData() {
    return this.portfolioService.jsonData;
  }

  ngOnInit() {
    this.portfolioService.fetchPortfolioItems().subscribe();
  }

  openModal(index: number) {
    this.currentDescription = this.jsonData[index].description;
    this.currentIndex = index;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  viewDetails() {
    if (this.currentIndex !== null) { 
      this.router.navigate(['/individual', this.currentIndex]);
    }
  }

  yourClickFunction(){
    const dialogRef = this.dialog.open(UploadArtworkDialogComponent, {
      width: '500px',
      // other configuration here if needed
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
