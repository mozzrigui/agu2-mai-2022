import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, lastValueFrom } from 'rxjs';
import { Article } from '../interfaces/article';
import { ArticleService } from './article.service';
export const ARTICLES_URL = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article instantiated');
  }

  override async refresh() {
    const articles = await lastValueFrom(
      this.http.get<Article[]>(ARTICLES_URL).pipe(delay(10))
    );
    console.log('articles: ', articles);
    this.articles = articles;
    this.save();
  }

  override async add(article: Article): Promise<void> {
    await super.add(article);
    await lastValueFrom(
      this.http.post<Article[]>(ARTICLES_URL, article).pipe(delay(10))
    );
  }

  override async remove(selectedArticles: Set<Article>): Promise<void> {
    await super.remove(selectedArticles);
    const ids = [...selectedArticles].map((a) => a.id);
    await lastValueFrom(
      this.http.delete<void>(ARTICLES_URL, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ids),
      })
    );
  }
}
