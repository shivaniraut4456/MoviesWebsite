import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  searchTest: string = '';
  keyup = this.httpService.keyupSubject;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

}
