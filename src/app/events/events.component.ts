import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type EventCard = {
  _id: string;
  title: string;
  description: string;
  price: number;
  date: string;
  imageUrl: string;
  __v: number;
}

@Component({  
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  jsonData: EventCard[] = [];
  activeModalData: EventCard | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEvents();
  }

  fetchEvents() {
    this.http.get<EventCard[]>('http://localhost:6006/event').subscribe(data => {
      this.jsonData = data;
    });
  }

  openModal(data: EventCard) {
    this.activeModalData = data;
  }

  closeModal() {
    this.activeModalData = null;
  }
}
