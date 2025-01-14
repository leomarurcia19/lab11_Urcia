import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{
  
  formsComponent!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formsComponent = this.formBuilder.group({
      recipeName: ['', Validators.required],
      numberOfPeople: [1, [Validators.required, Validators.min(1)]],
      publicationDate: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
      // preparationSteps: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formsComponent.valid) {
      const { recipeName, numberOfPeople, publicationDate, description, ingredients } = this.formsComponent.value;
      console.log('Ingrese su pedido: ', recipeName);
      console.log('Ingrese la cantidad:', numberOfPeople);
      console.log('Seleccione la fecha de su pedido:', publicationDate);
      console.log('Ingrese una descripción del pedido:', description);
      console.log('Añade algun extra a tu pedido:', ingredients);
      // console.log('Pasos de preparación:', preparationSteps);
    
      this.submitted = true;

      this.formsComponent.reset();
      setTimeout(() => {
        this.submitted = false;
      }, 2000); 
    }
  }
}