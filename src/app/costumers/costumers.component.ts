import { Component, OnInit } from '@angular/core';
import { CostumerService } from '../costumer.service';

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrls: ['./costumers.component.css']
})
export class CostumersComponent implements OnInit {

  public ArrayCostumers: any;

  constructor(public costumerservice: CostumerService) { }

  ngOnInit(): void {

    this.ArrayCostumers = this.costumerservice.getCostumers();

  }

}
