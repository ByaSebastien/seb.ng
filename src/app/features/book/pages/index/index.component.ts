import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  books$!: Observable<Book[]>;

  constructor(
    private readonly bookService: BookService
  ){}

  ngOnInit(): void {
    this.books$ = this.bookService.get();
  }

}
