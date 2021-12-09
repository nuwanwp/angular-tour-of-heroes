import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injector, LOCALE_ID, OnInit } from '@angular/core';
import { interval, Observable, zip } from 'rxjs';
import { debounceTime, delay, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-tour-of-heroes';

  date = '2021-12-15';

  authzToken = '';
  numberOfRequests = 1;

  loadTestRequestZip: Observable<any> = new Observable<any>();

  constructor(
    private injector: Injector,
    private http: HttpClient
  ) {
  }

  public ngOnInit(): void {
    this.observeLoadTest();
  }



  public formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value.toString();
  }

  public triggerLoadTest(): void{
    const requests = Array(this.numberOfRequests)
      .fill(this.generateRequests());
    this.loadTestRequestZip = zip(...requests);
    this.observeLoadTest();
  }

  public observeLoadTest(): void{
    this.loadTestRequestZip.pipe(delay(10000)).subscribe((data) => {
      console.log(data);
    });
  }

  private generateRequests(): Observable<any> {
    let reqHeaders = new HttpHeaders();
    reqHeaders = reqHeaders.set('Authorization', this.authzToken);
    reqHeaders = reqHeaders.set('Access-Control-Allow-Origin', '*');
    return this.http.get<any>('authority/gateway/authorize/valid', {headers: reqHeaders});
  }
}
