import { Component, OnInit } from '@angular/core';
import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashCan = faTrashCan;

  selectedArticles = new Set<Article>();

  isRefreshing = false;

  constructor(public articleService: ArticleService) {
    this.refresh();
  }

  ngOnInit(): void {}

  async refresh() {
    try {
      this.isRefreshing = true;
      await this.articleService.refresh();
      this.selectedArticles.clear();
    } catch (err) {
      console.log('err: ', err);
    } finally {
      this.isRefreshing = false;
    }
  }

  toogle(a: Article) {
    console.log('a: ', a);
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }

    this.selectedArticles.add(a);
  }

  async remove() {
    console.log('remove');
    await this.articleService.remove(this.selectedArticles);
    this.selectedArticles.clear();
  }
}
