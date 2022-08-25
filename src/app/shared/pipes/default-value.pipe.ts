import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue'
})
export class DefaultValuePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === "") {
      return "default";
    }
    return value;
  }

}
