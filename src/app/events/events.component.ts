import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadEventDialogComponent } from '../upload-event-dialog/upload-event-dialog.component';

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

  constructor(private http: HttpClient, private dialog: MatDialog) {}

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

  openUploadEventDialog(){
    const dialogRef = this.dialog.open(UploadEventDialogComponent, {
      width: '500px',
      height: '500px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.fetchEvents();
      }
    });
  }

  deleteEvent(eventId: string) {
    this.http.delete(`http://localhost:6006/event/${eventId}`).subscribe(
      () => {
        console.log("Event deleted successfully.");
        this.fetchEvents();
        this.closeModal();
      },
      error => {
        console.log(`Error deleting event: ${error.message}`);
      }
    );
  }
}
