import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { categoriesService } from './categories.service';

describe('categories service', () => {
  let service: categoriesService;
  let http: HttpTestingController;

  const expectedData = [
    {
      id: 'c1547aab-1e12-411f-a99a-b0f28cd04723',
      parentId: '00000000-0000-0000-0000-000000000000',
      name: 'Anything',
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [categoriesService, HttpClient, HttpHandler],
    }).compileComponents();
    service = TestBed.get(categoriesService);
  });

  describe('#getCategories', () => {
    it('should return categories', () => {
      service.getCategories().subscribe((data) => {
        expect(data).toEqual(expectedData);
      });
    });
  });
});
