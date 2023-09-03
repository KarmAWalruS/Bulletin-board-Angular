import { Component, OnInit } from '@angular/core';
import { Daum } from './components/main-board/main-board.interface';
import { BooksService } from './components/services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bulletin_board';

  books: Daum[] = [];

  constructor(private _booksService: BooksService) {}

  ngOnInit() {
    this._booksService.getBooks().subscribe((resp) => {
      this.books = resp.data;
    });
  }
}
