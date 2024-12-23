import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent implements OnInit , OnDestroy{
  
  constructor(public modal : ModalService){}
  ngOnDestroy(): void {
    this.modal.unregister('auth')
  }


  ngOnInit(){
    this.modal.register('auth')
    
  }
}
