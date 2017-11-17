import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'IterableDictPipe'
})

export class IterableDictPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value).map(key => {
            let pair = {};
            pair['key'] = key;
            pair['value'] = value[key];
            return pair;
        });
    }
}
