import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ambassador',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ambassadeur.component.html',
  styleUrls: ['./ambassadeur.component.css']
})
export class AmbassadorComponent {}


