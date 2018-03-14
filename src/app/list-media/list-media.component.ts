import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';
import { DigitransitItService } from '../services/digitransit-it.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.css']
})
export class ListMediaComponent implements OnInit {

  stopStationName: string = '';
  printThis: string;
  mediaArray: any;
  stopArray: any;

  constructor(public mediaService: MediaService, public digiTransitService: DigitransitItService) { }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    console.log(this.mediaService.getAllMedia().subscribe(data => {
      this.mediaArray = data;

      this.mediaArray.map(media => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tn320.png';
        media.thumbnail = thumbName;
      });
      console.log(this.mediaArray);
    }));
  }

  getRoute() {
    this.digiTransitService.getRoute(this.stopStationName).subscribe(
      (response) => {
        console.log(response['data'].stops);
        this.stopArray = response['data'].stops;
      });
  }
}

