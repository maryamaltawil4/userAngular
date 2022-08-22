import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

  transform(value: Date ): any {

  	if (!value) return value;

		return moment().diff(value, 'years')+" Years";
  	
}}
