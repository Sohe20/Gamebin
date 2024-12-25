import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

@Input() ModalId = ''
 

constructor(public modal:ModalService , public elementRef:ElementRef){}


 ngOnInit(){
 document.body.appendChild(this.elementRef.nativeElement)
  
 }

closeModal(){
  this.modal.toggleModal(this.ModalId);
}
}
