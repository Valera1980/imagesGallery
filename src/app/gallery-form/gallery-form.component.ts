import { IFileMeta } from './../models/filemeta';
import { FileReaderService } from './../services/fileReader/file-reader.service';
import { ModelFileAndMeta } from './../models/fileandmeta.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FileReaderService]
})
export class GalleryFormComponent implements OnInit, AfterViewInit {

  formGallery: FormGroup;
  @ViewChild('dropArea') dropArea: ElementRef<HTMLDivElement>;
  @Output() eventSave = new EventEmitter();

  constructor(
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _fileReader: FileReaderService
  ) { }

  ngOnInit(): void {
    this._buildForm();
  }
  ngAfterViewInit(): void {
    fromEvent(this.dropArea.nativeElement, 'dragover')
      .subscribe((evt: any) => {
        console.log('DRAG OVER');
        evt.stopPropagation();
        evt.preventDefault();
        // evt.dataTransfer.dropEffect = 'copy';
      });
    fromEvent(this.dropArea.nativeElement, 'drop')
      .subscribe((evt: any) => {
        evt.stopPropagation();
        evt.preventDefault();
        console.log('DROP', evt);
        const files = evt.dataTransfer.files; // FileList object.
        console.log(files);
        this.addDropFiles(files);

      });
  }
  private _buildForm(): void {
    this.formGallery = this._fb.group({
      name: [''],
      files: this._fb.array([])
    });
    /**
     * listen form changes
     */
    this.formGallery.valueChanges
      .subscribe(data => {
        console.log(data);
      });
  }
  get files() {
    return this.formGallery.get('files') as FormArray;
  }
  createFileFormGroup(model: ModelFileAndMeta): FormGroup {
    return this._fb.group({
      name: [model.name],
      comment: [model.comment],
      created: [model.created],
      file: [model.file],
      id: [model.id],
      isNew: [model.isNew],
      size: [model.size],
      type: [model.type],
      url: [model.url]
    });
  }
  addFileAndMeta(model: ModelFileAndMeta = null): void {
    if (!model) {
      const newFileAndMeta = new ModelFileAndMeta({
        name: '',
        comment: '',
        created: new Date(),
        file: null,
        id: UUID.UUID(),
        isNew: true
      });
      this.files.push(this.createFileFormGroup(newFileAndMeta));
      this._cd.detectChanges();
      return;
    }
    this.files.push(this.createFileFormGroup(model));
    this._cd.detectChanges();
  }
  addDropFiles(files: any): void {
    // const data = this._fileReader.readTwo(files)
    for (const file of files) {
      const model = new ModelFileAndMeta({
        id: UUID.UUID(),
        isNew: true,
        name: file.name,
        size: file.size,
        type: file.type,
        file,
        created: new Date(),
        comment: 'from d&d'
      });
      this.addFileAndMeta(model);
    }

  }
  addDropFilesOld(files: any): void {
    // const data = this._fileReader.readTwo(files)
    const data = this._fileReader.readTwo(files)
      .subscribe((filesData: IFileMeta[]) => {
        for (const file of filesData) {
          const model = new ModelFileAndMeta({
            id: UUID.UUID(),
            isNew: true,
            name: file.name,
            size: file.size,
            type: file.type,
            file: file.file,
            created: new Date(),
            comment: 'from d&d'
          });
          this.addFileAndMeta(model);
        }
      });
  }
  save(): void {
    this.eventSave.emit(this.formGallery.value);
  }

}
