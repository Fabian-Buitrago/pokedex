import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'color' })
export class ColorPipe implements PipeTransform {
  transform(value: string): string {
    var base = Number(new Date()) + value.split('').reduce(function (a, b) { return a + b.charCodeAt(0); }, 0);
    var hexString = base.toString(16);
    return '#' + hexString.substr(hexString.length - 3);
  }
}