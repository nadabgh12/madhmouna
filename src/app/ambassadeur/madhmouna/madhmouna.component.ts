import { Component, OnInit } from '@angular/core';
import { AmbassadeurProfileService } from '../../services/ambassadeur-profile.service';

@Component({
  selector: 'madhmouna',
  templateUrl: 'madhmouna.component.html',
  styleUrls: ['madhmouna.component.css']
})
export class MadhmounaComponent implements OnInit {
  user: any = null;

  constructor(private profileService: AmbassadeurProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Erreur chargement du profil :', err);
      }
    });
  }
}
