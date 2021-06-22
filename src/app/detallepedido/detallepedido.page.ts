import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-detallepedido',
  templateUrl: './detallepedido.page.html',
  styleUrls: ['./detallepedido.page.scss'],
})
export class DetallepedidoPage implements OnInit {
  

  constructor(private rout:Router,private navCtrl: NavController) { }

  ngOnInit() {
  }
  return():void{
    this.navCtrl.back();
  }

}
