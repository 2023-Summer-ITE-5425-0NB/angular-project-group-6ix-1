import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private router: Router, private portfolioService: PortfolioService) { }

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
}
