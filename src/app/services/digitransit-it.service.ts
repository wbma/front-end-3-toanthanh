import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DigitransitItService {
  baseUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
  constructor(private http: HttpClient) { }
  getRoute(stationName: string) {
    const body = `{
      stops(name: "${stationName}") {
        name
        lat
        lon
        patterns {
          name
          route {
            shortName
            longName
          }
          directionId
        }
      }
    }`;
    const settings = {headers: new HttpHeaders().set('Content-Type', 'application/graphql')};
    interface StopData {
      stops: string[];
    }

    interface ResponseData {
      data: StopData;
    }
    return this.http.post(this.baseUrl, body, settings);
  }
}
