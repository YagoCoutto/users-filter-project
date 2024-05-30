import { Component } from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.scss'
})

export class UserFilterComponent {
  foods = [
    {value: 'ativo-0', viewValue: 'ativo'},
    {value: 'inativo-1', viewValue: 'Inativo'},
  ]
}
