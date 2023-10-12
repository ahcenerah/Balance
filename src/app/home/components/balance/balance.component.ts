import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent{
  @Input() balance: number; // Pas d'initialisation ici
  @Output() balanceChange = new EventEmitter<number>();
  constructor() {
    this.balance = 0; // Initialisation dans le constructeur
  }
  onBalanceChange() {
    // Émettre la nouvelle valeur de la balance
    this.balanceChange.emit(this.balance);
  }
}
