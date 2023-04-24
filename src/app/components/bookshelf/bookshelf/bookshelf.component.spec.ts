import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfComponent } from './bookshelf.component';

describe('BookshelfComponent', () => {
  let component: BookshelfComponent;
  let fixture: ComponentFixture<BookshelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookshelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
