import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modal: IModal[] = [];

  constructor() {}

  register(id: string) {
    this.modal.push({ id, visible: false });
  }


  unregister(id : string){
   this.modal = this.modal.filter(mod => mod.id !== id)
  }

  isOpenModal(id: string): boolean {
    return !!this.modal.find((element) => element.id === id)?.visible;
  }

  toggleModal(id : string){
  const modal = this.modal.find((element) => element.id === id)
  if(modal){
    modal.visible = !modal.visible;
  }
  }
}
