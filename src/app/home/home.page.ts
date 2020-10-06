import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModifierComponent } from '../modifier/modifier.component';
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

  constructor(private paintingService: PaintingService, private modal: ModalController) { }

  ngOnInit(): void {
    this.pictures = this.paintingService.initPaintings();
    this.pairs = this.splitPairs();
  }

  splitPairs(): PaintingFragment[][] {
    return this.pictures.reduce(function (result: PaintingFragment[][], value, index, array) {
      if (index % 2 === 0)
        result.push(array.slice(index, index + 2));
      return result;
    }, []);
  }

  setModifier(selectedPicture: PaintingFragment) {
    this.modal.create({ component: ModifierComponent, componentProps:{selectedPicture: selectedPicture} })
      .then(m => {
        m.present();
        return m.onDidDismiss();
      })
      .then(r=>{
        this.paintingService.selectPicture(selectedPicture,r.data);
        console.log(this.pictures)
      });
  }

}
