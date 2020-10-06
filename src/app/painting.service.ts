import { Injectable } from '@angular/core';
import { PaintingFragment } from './painting-fragment';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  pictures: PaintingFragment[];
  selected = Array<PaintingFragment>();

  constructor() { }

  public initPaintings(): PaintingFragment[] {
    this.pictures = [
      new PaintingFragment({ id: 0, name: "arc" }),
      new PaintingFragment({ id: 1, name: "beard" }),
      new PaintingFragment({ id: 2, name: "haunted-house" }),
      new PaintingFragment({ id: 3, name: "house" }),
      new PaintingFragment({ id: 4, name: "medal" }),
      new PaintingFragment({ id: 5, name: "mountain" }),
      new PaintingFragment({ id: 6, name: "purse" }),
      new PaintingFragment({ id: 7, name: "shoulder" })
    ];

    return this.pictures;
  }

  public selectPicture(picture: PaintingFragment, modifier: number) {
    picture.modifier = modifier;
    this.selected.push(picture);
  }
}
