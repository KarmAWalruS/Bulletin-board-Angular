import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-or-change-card',
  templateUrl: './new-or-change-card.component.html',
  styleUrls: ['./new-or-change-card.component.scss'],
})
export class NewOrChangeCardComponent {
  advertisementForm: UntypedFormGroup = new UntypedFormGroup({});

  private httpClient: HttpClient;
  imageSrc: string = '';

  constructor(private fb: FormBuilder, _http: HttpClient) {
    this.httpClient = _http;
    this._buildForm();
  }

  private _buildForm() {
    this.advertisementForm = this.fb.group({
      categoryId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: '',
      location: ['', [Validators.required]],
      images: this.fb.array([]),
      cost: '',
    });
  }

  get images() {
    return this.advertisementForm.get('images') as FormArray;
  }

  addImage() {
    const imagesControl = this.advertisementForm.get('images') as FormArray;
    imagesControl.push(this.fb.control(imagesControl));
  }

  removeImage(index: number) {
    this.images.removeAt(index);
  }

  onFileChange(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = e.target?.result;
        this.addImage();

        const imagesControl = this.advertisementForm.get('images') as FormArray;
        if (imagesControl) {
          const imagesValue = imagesControl.value as string[];
          imagesValue[imagesValue.length - 1] = image as string;
          imagesControl.setValue(imagesValue);
          imagesControl.updateValueAndValidity();
        } else {
          console.error('imagesControl is undefined or not a FormArray');
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onCreate(): void {
    this.httpClient
      .post('http://194.87.237.48:5000/Advert', {
        categoryId: this.advertisementForm.get('category')?.value,
        name: this.advertisementForm.get('name')?.value,
        description: this.advertisementForm.get('description')?.value,
        location: this.advertisementForm.get('adress')?.value,
        images: this.advertisementForm.get('images')?.value,
        cost: this.advertisementForm.get('price')?.value,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
