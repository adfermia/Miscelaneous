import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `

  <app-ng-style></app-ng-style>

  <app-css></app-css>
  <p>
      Hola mundo desde app.component
  </p>

  <app-clases>
  </app-clases>
  <br><br>
  <p appResaltado="orange">
      Hola mundo
  </p>

  <br><br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
   }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }



}
