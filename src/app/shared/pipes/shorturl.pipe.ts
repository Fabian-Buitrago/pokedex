import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortUrl' })
export class ShorturlPipe implements PipeTransform {
  transform(value: string): string {
    return value.split("/")[value.split("/").length - 2];
  }
}