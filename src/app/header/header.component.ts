import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('navigateClick') navigateItemClickEventEmitter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onClickNavigateItem(itemName: string) {
    console.log(' click on  [' + itemName + '] ');
    this.navigateItemClickEventEmitter.emit(itemName);
  }
}
