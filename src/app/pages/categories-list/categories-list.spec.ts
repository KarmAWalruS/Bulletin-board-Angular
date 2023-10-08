import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriesListComponent } from './categories-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('SearchPanelComponent', () => {
  let component: CategoriesListComponent;
  let fixture: ComponentFixture<CategoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CategoriesListComponent],
    });
    fixture = TestBed.createComponent(CategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain categorie Work', () => {
    /* const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p')).toContain(''); */
  });
});
