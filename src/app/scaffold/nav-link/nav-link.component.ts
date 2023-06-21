import { Component, Input } from '@angular/core';
import { LinkItem } from './link-item';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent {
  @Input() item?: LinkItem;
}
