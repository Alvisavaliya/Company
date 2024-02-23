import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Model/employee';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(list: Employee[],filterBy:string ) {
    if(filterBy .toLowerCase()==='all' || filterBy === '' || filterBy === '0')
    {
      return list;
    }
    else{
      return list.filter((emp)=>{
       return emp.gender.toLowerCase() === filterBy.toLowerCase();
      })
    }
  }

}
