import { Component, OnInit } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor() { }

  roomList: RoomList[] = [];

  ngOnInit(): void {

    this.roomList = [{
      roomNumber: 1,
      roomtype: 'Delux Room',
      amenities: 'Air conditioning ,Free wifi ,Tv, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/a-black-and-white-photo-of-a-clock-tower-4sAXp8kJSas',
      checkintime: new Date('09-April-2024'),
      checkoutTime: new Date('10-April-2024'),
      rating: 4.5

    },
    {
      roomNumber: 2,
      roomtype: 'Delux Room',
      amenities: 'Air conditioning ,Free wifi ,Tv, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/a-black-and-white-photo-of-a-clock-tower-4sAXp8kJSas',
      checkintime: new Date('09-April-2024'),
      checkoutTime: new Date('10-April-2024'),
      rating: 4.6
    },
    {
      roomNumber: 3,
      roomtype: 'private suite',
      amenities: 'Air conditioning ,Free wifi ,Tv, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://unsplash.com/photos/a-black-and-white-photo-of-a-clock-tower-4sAXp8kJSas',
      checkintime: new Date('09-April-2024'),
      checkoutTime: new Date('10-April-2024'),
      rating: 4.7

    }
    ];

  }


  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!:RoomList;

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }



  toggle() {
    this.hideRooms = !this.hideRooms
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom=room;

  }

}
