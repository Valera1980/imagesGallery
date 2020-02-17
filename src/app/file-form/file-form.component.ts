import { IFileMeta } from './../models/filemeta';
import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileFormComponent implements OnInit {
  @Input() fileControlItem: FormGroup;
  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

  readFile(files: IFileMeta[]): void {
    const file = files[0];
    this.fileControlItem.patchValue({
      file: new File(file.file, '0000'),
      name: file.name,
      size: file.size,
      type: file.type,
      url: file.url
    });
    this._cd.detectChanges();
  }
  readFileRaw(files: any[]): void {
    const file = files[0];
    this.fileControlItem.patchValue({
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      url: file.url
    });
    this._cd.detectChanges();
  }
  get name() {
    return this.fileControlItem.get('name');
  }
  get id() {
    return this.fileControlItem.get('id');
  }
  get url() {
    return this.fileControlItem.get('url');
  }
  get file() {
    return this.fileControlItem.get('file');
  }

  // this._buildForm();
  // private _buildForm(): void {
  //   this._fb.group({
  //     comment: [''],
  //     created: [new Date],
  //     file: [null],
  //     id: [''],
  //     isNew: [true],
  //     name: [''],
  //   })
  // }

}
