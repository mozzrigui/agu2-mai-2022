import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  articles: Article[] = [
    {
      name: 'Marteau',
      price: 2.99,
      qty: 100,
    },
    {
      name: 'Faucille',
      price: 5.45,
      qty: 50,
    },
    {
      name: 'Perceuse',
      price: 25,
      qty: 100,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
