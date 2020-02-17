import { ModelGallery } from './../../models/gallery.model';
import { Observable, of, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModelFileAndMeta } from 'src/app/models/fileandmeta.model';

@Injectable({
  providedIn: 'root'
})
export class SavefileService {

  private _api_files_save = '//localhost:64524/adminpanel/complex/test';
  private _api_gallery_save = '//localhost:64524/gallery';
  constructor(
    private _http: HttpClient
  ) { }

  querySaveGallery(model: ModelGallery): Observable<any> {
    const body = {
      name: model.name
    };
    return this._http.post(this._api_gallery_save, body);
  }
  sendSingleFile(model: ModelGallery, fileData: ModelFileAndMeta): Observable<any> {
    const form = new FormData();
    form.append('galId', model.name);
    form.append('file', fileData.file);
    const { file, ...rest } = fileData;
    for (const [key, value] of Object.entries(rest)) {
      form.append(key, value);
    }
    return this._http.post(this._api_files_save, form);
  }
  querySaveFiles(model: ModelGallery): Observable<any> {
    const data = [];
    for (const file of model.files) {
      data.push(this.sendSingleFile(model, file));
    }
    return forkJoin(data);
    // const body = {
    //   name: model.name
    // };
    // return this._http.post(this._api_gallery_save, body);
  }
  // querySave(model: ModelGallery): Observable<any> {
  //   const body = {
  //     name: model.name,
  //     files: model.files
  //   };
  //   return this._http.post(this._api, body);
  // }
  // querySaveAsFormData(model: ModelGallery): Observable<any> {
  //   const form = new FormData();
  //   // form.append('name', model.name);
  //   // model.files[0].file[0]['desc'] = 'ipopoioipo';
  //   const data = {
  //     name: model.files[0].name,
  //     file: model.files[0].file,
  //   };

  //   const arr = [];
  //   const obj = {};
  //   // const obj = {} as Blob;
  //   for (const [key, value] of Object.entries(model.files[0])) {

  //     obj[key] = value;
  //     // form.append('file', obj);
  //   }
  //   arr.push(obj);

  // form.append('file', data);
  // form.append('model', {
  // name: model.files[0].name,
  // file: model.files[0].file
  // });
  // form.append('[file][file]', model.files[0].file)
  // form.append('file', {
  //   name: model.files[0].name,
  //   file: model.files[0].file
  // });
  // const ddd = form.get('file');
  // for (const [key, value] of Object.entries(model)) {
  //   if (Array.isArray(value)) {
  //     for (const item of value) {
  //       form.append(key, item);
  //     }
  //   } else {
  //     if (value) {
  //       form.append(key, value);
  //     }
  //   }
  // }
  // form.append('files', JSON.stringify(model.files));
  // for (const f of model.files) {
  // form.append('file', model.files[0].file as File);
  // }
  // const opt = {
  //   headers: new HttpHeaders().set('content-type', 'multipart/form-data')
  // };

  // const body = {
  //   name: model.name,
  //   files: model.files
  // };
  // return this._http.post(this._api, form);

  // for (const file of model.files) {
  //   form.append('file', file)
  // }
  //   }
  // }

  // function convert (obj, form, namespace) {

  //   var fd = form || new FormData();
  //   var formKey;

  //   for (var property in obj) {
  //     if (obj.hasOwnProperty(property)) {

  //       if (namespace) {
  //         formKey = namespace + '[' + property + ']';
  //       } else {
  //         formKey = property;
  //       }

  //       // if the property is an object, but not a File,
  //       // use recursivity.
  //       if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {

  //         objectToFormData(obj[property], fd, property);

  //       } else {

  //         // if it's a string or a File object
  //         fd.append(formKey, obj[property]);
  //       }

  //     }
  //   }

  //   return fd;

  // };

  // // usage example
  // var z = objectToFormData({
  //   obj: {
  //     prop: 'property value'
  //   },
  //   arr: [
  //     'one',
  //     'two',
  //     'three',
  //     new File([''], '')
  //   ],
  //   file: new File([''], '')
  // });

  // var xhr = new XMLHttpRequest;
  // xhr.open('POST', '/', true);
  // xhr.send(z);


  // // usage for Angular.js

  // // wrap object to formdata method,
  // // to use it as a transform with angular's http.
  // var formDataTransform = function (data, headersGetter) {

  //   // we need to set Content-Type to undefined,
  //   // to make the browser set it to multipart/form-data
  //   // and fill in the correct *boundary*.
  //   // setting Content-Type to multipart/form-data manually
  //   // will fail to fill in the boundary parameter of the request.
  //   headersGetter()['Content-Type'] = undefined;

  //   return objectToFormData(data);

  // };
}
