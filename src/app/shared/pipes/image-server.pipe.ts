import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Pipe({
  name: 'imageServer'
})
export class ImageServerPipe implements PipeTransform {

  transform(value: string|null): string {
    return value ? environment.base_image_url + '/' + value : '/assets/images/default.jpg';
  }

}
