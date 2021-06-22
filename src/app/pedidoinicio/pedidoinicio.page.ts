import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-pedidoinicio',
  templateUrl: './pedidoinicio.page.html',
  styleUrls: ['./pedidoinicio.page.scss'],
})
export class PedidoinicioPage implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit() {
  }
  navigateToPedido() {
    this.rout.navigate(['/detallepedido']);
  }


}
