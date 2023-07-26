import { Component } from '@angular/core';

type EventCard = {
  id: string;
  name: string;
  content: string;
  price: number;
  date: string;
  link: string;
  img: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  jsonData: EventCard[] = [
    {
      id: "card1",
      name: "Farm, Friends and Family",
      content: "FFF is an event held during the summer. Have a great time with your family while meeting our little furry friends.",
      price: 45,
      date: "Sep-15",
      link: "./services.html",
      img: "https://i.pinimg.com/564x/31/37/62/313762aea058b18873a225d9180db685.jpg"
    },
    {
      id: "card2",
      name: "Puppy Fest",
      content: "You like puppies? So do we, come join us this Nov 10th at High Park",
      price: 55,
      date: "Nov-10",
      link: "./uhoh.html",
      img: "https://www.mcleanvet.com/wp-content/uploads/sites/31/2018/06/dogpark.jpg"
    },
    {
      id: "card3",
      name: "Comming Soon",
      content: "We are working in more events for you.....stay tuned",
      price: 0,
      date: "",
      link: "",
      img: "https://media.istockphoto.com/vectors/geometric-banner-megaphone-with-coming-soon-bubble-loudspeaker-modern-vector-id1181378326?k=20&m=1181378326&s=612x612&w=0&h=FUstjwTm6ZOYSHkusiHSsPHUV7kSGDnmRF18QDy-AO8="
    },
  ];
  
  activeModalData: EventCard | null = null;

  openModal(data: EventCard) {
    this.activeModalData = data;
    console.log("open modal")
    console.log(this.activeModalData)
  }

  closeModal() {
    this.activeModalData = null;
  }
}
