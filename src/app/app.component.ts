import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery'
import {async, elementAt} from "rxjs";


@Component({
  selector: 'app-root',
  template: '<div><h1>Hello</h1><br>  <button (click)="sendRequest()" > Click me </button></div>'
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'JQueryInAngular';
  url: string="https://jsonplaceholder.typicode.com/todos/";

  sendRequest() {
    fetch(this.url)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));
  }

  ngOnInit() {
    // $(`button`).click(function () {
    //   alert(`Clicked!`);
    // });

    $(`div`).css(`background-color`, `rgba(42, 149, 189, 0.6)`)

  }
}

