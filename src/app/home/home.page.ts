import { Component, OnInit } from '@angular/core';
import { PaintingFragment } from '../painting-fragment';
import { PaintingService } from '../painting.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pictures: PaintingFragment[];
  pairs: PaintingFragment[][];

  constructor(private paintingService: PaintingService) { }

  ngOnInit(): void {
    this.pictures = this.paintingService.getPaintings();
    this.pairs = this.splitPairs();
  }

  splitPairs(): PaintingFragment[][] {
    return this.pictures.reduce(function (result: PaintingFragment[][], value, index, array) {
      if (index % 2 === 0)
        result.push(array.slice(index, index + 2));
      return result;
    }, []);
  }

}
