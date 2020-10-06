import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaintingFragment } from '../painting-fragment';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss'],
})
export class ModifierComponent implements OnInit {

  @Input() selectedPicture: PaintingFragment;

  constructor(private modal:ModalController) { }

  ngOnInit() {}

  selectValue(value:number){
    this.modal.dismiss(value);
  }

}
