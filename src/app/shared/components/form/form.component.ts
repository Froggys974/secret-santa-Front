import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Définir un type pour les champs du formulaire
interface FormField {
  label: string;
  type: string;
  required?: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formTitle: string = 'Form';
  @Input() formFields: { [key: string]: FormField } = {};
  @Input() submitButtonText: string = 'Submit';
  @Output() formSubmitted = new EventEmitter<any>();

  formGroup: FormGroup = new FormGroup({});

  // Définir objectKeys comme une méthode
  objectKeys = Object.keys;

  ngOnInit() {
    for (const key of Object.keys(this.formFields)) {
      const field = this.formFields[key];
      const validators = field.required ? [Validators.required] : [];
      this.formGroup.addControl(key, new FormControl('', validators));
    }
  }

  onSubmit() {
    // Check if the form is valid
    if (this.formGroup.valid) {
      this.formSubmitted.emit(this.formGroup.value);
    } else {
      // Mark all controls as touched to show validation errors
      this.formGroup.markAllAsTouched();
    }
  }
}
