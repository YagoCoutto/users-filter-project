import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/user/filter.options.interface';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.scss'
})

export class UserFilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  }

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },

  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter(){
    this.onFilterEmitt.emit(this.filterOptions)
  }


  dateSelected(date: any) {
    console.log(date)
  };


}
