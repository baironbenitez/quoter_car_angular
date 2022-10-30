import { Component, Input, OnInit } from '@angular/core';
import { Info } from 'src/app/interface/Info.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() info!: Info;
  @Input() result = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
