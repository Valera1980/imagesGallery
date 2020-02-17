import { catchError } from 'rxjs/internal/operators';
import { IFileMeta } from './../models/filemeta';
import { FileReaderService } from './../services/fileReader/file-reader.service';
import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { EMPTY } from 'rxjs';

export interface IFileReadConfig {
  mode: 'single' | 'multy';
}
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FileReaderService]
})
export class FileComponent implements OnInit {
  @Input() config: IFileReadConfig;
  @ViewChild('fileInput') fileInput: ElementRef<any>;
  @Output() eventRead = new EventEmitter<IFileMeta>();
  @Output() eventReadRaw = new EventEmitter<any>();
  @Output() eventReadError = new EventEmitter();
  constructor(
    private _fileReader: FileReaderService
  ) { }

  ngOnInit(): void {
    if (!this.config) {
      this.config = {
        mode: 'single'
      };
    }
  }
  uploadFile(event: any): void {
    console.log(event);
    this.eventReadRaw.emit(event.target.files)
    // this._fileReader.readTwo(event.target.files)
    //   .pipe(
    //     catchError(e => {
    //       this.eventReadError.emit(e);
    //       return EMPTY;
    //     })
    //   )
    //   .subscribe((readRes: any) => {
    //     // if (!Array.isArray(readRes)) {
    //     this.eventRead.emit(readRes);
    //     // }
    //   });
  }
  invokeDialog(): void {
    this.fileInput.nativeElement.click();
  }

}
