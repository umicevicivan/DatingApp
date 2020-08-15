import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //@Input() valuesFromHome: any;
  //@Output() uvek emituje neki event i moramo ovde da deklarisemo kao novi event, uvek se sastoji od 4 dela
  //1. napisi @Output(), 2. napravi novi EventEmitter, 3. u metodi u kojoj oces to da emitujes, stavi .emit(~sta zelis~), 
  //4. idi u parent i dodaj (cancelRegister) = "~metoda~($event)" i napravi tu metodu
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Sucessfull');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.alertify.warning('canceled');
  }

}
