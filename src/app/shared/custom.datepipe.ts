import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customDate',
})

export class CustomDatePipe extends DatePipe implements PipeTransform {
    transform (value: any) {
        return super.transform(value, "MMM, y");
    }
}