import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/adress.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address:IAddress): string {
    const ADDRESS_FORMATAD = address.rua
    return ADDRESS_FORMATAD
  }

}
