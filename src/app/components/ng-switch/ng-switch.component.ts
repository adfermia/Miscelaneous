import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alerta = 'info';
  tipos: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  constructor() { }

  ngOnInit() {
  }


  change() {


      this.alerta = 'success';


  }
}
