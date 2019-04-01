import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  numero:string='';
  tablas = [];
  divisor = [];
  opcion : boolean = false;
  constructor(public navCtrl: NavController, public alert: AlertController) {
    
  }

  tabla(numero){
    if(numero == ''){
      this.alerta();
    }else{
      let resul;
      for(let i = 0 ; i <= 10;i++){
          resul = numero * i;
          this.tablas[i] = resul;
      } 
      console.log(this.tablas);
      this.opcion = false;
    }
  }

  divisores(numero){
    if(numero == ''){
      this.alerta();
    }else{
      let cont = 0;
      for(let a = 0 ; a <= this.divisor.length;a++){
        this.divisor.shift()
      }
      for(let i = 1 ; i<=numero;i++){
          if(numero % i == 0){
            this.divisor[cont] = i;
            cont++;
          }

      }
      this.opcion= true;
      
    }
  }

  alerta(){
    let al = this.alert.create({
      title : 'Debes escribir un numero',
      buttons : [{
        text : 'Entendido',
      }]
    }); 
    al.present();
  }
}
