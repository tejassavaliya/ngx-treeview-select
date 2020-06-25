import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  parentOrgSetup = [{
    Name: "my name",
    id: 1,
    level: 0,
    children: [{
      Name: "my name child 1",
      id: "1.1",
      level: 1,
      children: [{
        Name: "my name child 1 child 1",
        id: "1.1.1",
        level: 2,
      }]
    }],
  },{
    Name: "my name 2",
    id: 2,
    level: 0,
    children: [{
      Name: "my name 2 child 2",
      id: "2.1",
      level: 1,
      children: []
    }]
  }];

  selectedTreeNode = {
    Name: "my name 2",
    id: 2,
    children: [{
      Name: "my name 2 child 2",
      id: "2.1",
      children: []
    }]
  };
  constructor() {
  }

  ngOnInit() {
  }

  handleSelectedNode(selectedNode: any) {
    console.log(selectedNode);

  }


}

