import { IFileMeta } from './../../models/filemeta';
import { Injectable } from '@angular/core';
import { Observable, Subject, of, concat, forkJoin, combineLatest, zip, from } from 'rxjs';
import { mergeAll, concatAll, mergeMap, tap, map, toArray, reduce } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor() { }

  readSingleFile(file: any): Observable<IFileMeta> {
    return new Observable(o => {
      const reader = new FileReader();
      reader.onload = () => {
        const res: IFileMeta = {
          name: file.name,
          size: file.size,
          type: file.type,
          file: reader.result,
          url: ''
        };
        o.next(res);
        o.complete();
      };
      reader.readAsDataURL(file);
      // reader.readAsArrayBuffer(file);
    });
  }

  readTwo(files: any | any[]): Observable<any> {
    const res = [];
    for (const file of files) {
      const res$ = this.readSingleFile(file);
      res.push(res$);
    }
    return forkJoin(res);
  }

  // read(files: any | any[]): Observable<IFileMeta | IFileMeta[]> {
  //   const reader = new FileReader();
  //   if (Array.isArray(files)) {

  //   } else {
  //     return new Observable((o) => {
  //       reader.onload = () => {
  //         const res: IFileMeta = {
  //           name: files.name,
  //           size: files.size,
  //           type: files.type,
  //           file: reader.result,
  //           url: files.url
  //         };
  //         o.next(res);
  //         o.complete();
  //       };
  //       reader.onerror = () => {
  //         o.error(reader.error);
  //       };
  //       reader.readAsDataURL(files);
  //     });
  //   }
  // }
}
