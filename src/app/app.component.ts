import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public lat:any;
  public lng:any;
  public markers: any[];
  public zoom: number;
  title = 'customerLocation';

  constructor() {
    this.markers = [];
    this.zoom = 2;
  }
  public ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.markers.push({
            position: {
              lat: this.lat,
              lng: this.lat
            },
            label: {
              color: "black",
              text: "your location"
            }
          });
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
