import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss']
})
export class CardPricingComponent {
  @Input() gameType: string = 'Digital PS4';
  @Input() gamePrice: string = 'R$ 299,99';
}
