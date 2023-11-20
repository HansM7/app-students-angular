import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-items',
  templateUrl: './side-items.component.html',
  styleUrls: ['./side-items.component.scss'],
})
export class SideItemsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
