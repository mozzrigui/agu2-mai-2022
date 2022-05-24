import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

const ARTICLE_KEY = 'articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  getArticle(): Article[] {
    const str = localStorage.getItem(ARTICLE_KEY);
    if (str === null) {
      return [];
    }

    return JSON.parse(str);
  }
  articles: Article[] = this.getArticle();

  constructor() {}

  async add(article: Article) {
    this.articles.push(article);
    this.save();
  }

  save() {
    localStorage.setItem(ARTICLE_KEY, JSON.stringify(this.articles));
  }

  refresh() {
    this.articles = this.getArticle();
  }

  async remove(selectedArticles: Set<Article>) {
    this.articles = this.articles.filter((a) => !selectedArticles.has(a));
    this.save();
  }
}
