import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  faPlus = faPlus;
  isAdding = false;
  faSpinner = faSpinner;
  f = new FormGroup({
    name: new FormControl('Tournevis', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl(2.5, [Validators.required]),
    qty: new FormControl(1, [Validators.required]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {}

  async submit() {
    console.log('yeah');
    try {
      this.isAdding = true;
      const article = this.f.value as Article;
      await this.articleService.add(article);
      this.router.navigate(['..'], { relativeTo: this.route });
    } catch (err) {
      console.log('err', err);
    } finally {
      this.isAdding = false;
    }
  }
}
