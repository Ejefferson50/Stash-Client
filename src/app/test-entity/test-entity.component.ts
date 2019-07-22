import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-entity',
  templateUrl: './test-entity.component.html',
  styleUrls: ['./test-entity.component.css']
})
export class TestEntityComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {

    this.getTestEntities();
  }

  getTestEntities(): void {
    console.log("get test entities called.");
    this.testService.getTestEntities().subscribe(entities => console.log(entities));
  }

}
