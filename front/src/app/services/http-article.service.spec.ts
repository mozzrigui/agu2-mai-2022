import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { articles } from 'src/test/articles.fixture';
import { ARTICLES_URL, HttpArticleService } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should refresh', async () => {
    const call = service.refresh();
    const req = http.expectOne(ARTICLES_URL);
    expect(req.request.method).toBe('GET');
    req.flush(articles);
    await call;
    expect(service.articles).toEqual(articles);
  });
});
