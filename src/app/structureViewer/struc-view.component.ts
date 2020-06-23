import {Component, Injectable, OnInit} from '@angular/core';
import {StrucViewService} from './struc-view.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-stv',
  template: '<div id="litemol"></div>',
  styleUrls: ['./struc-view.component.scss']
})

export class StrucViewComponent implements OnInit {

  pdbName;

  constructor(private struc: StrucViewService) {
    this.pdbName = -1;
  }

  ngOnInit(): void {
    this.struc.draw('', []);
  }
}
