import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './app-item-details.component.html',
  styleUrls: ['./app-item-details.component.css']
})
export class AppItemDetailsComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    let itemId: number;

    itemId = this.route.snapshot.params.id;
    //this.getLesson(lessonId);
  }

}
