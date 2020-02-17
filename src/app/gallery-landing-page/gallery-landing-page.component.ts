import { Component, OnInit } from '@angular/core';
import { SavefileService } from '../services/savefile/savefile.service';

@Component({
  selector: 'app-gallery-landing-page',
  templateUrl: './gallery-landing-page.component.html',
  styleUrls: ['./gallery-landing-page.component.scss']
})
export class GalleryLandingPageComponent implements OnInit {

  constructor(
    private _saveFile: SavefileService
  ) { }

  ngOnInit(): void {
  }
  save(data): void {
    console.log(data);
    this._saveFile.querySaveFiles(data)
      // this._saveFile.querySave(data)
      .subscribe();
  }

}
