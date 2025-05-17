import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-femmes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard-femmes.component.html', // correction ici
  styleUrls: [ './dashboard-femmes.component.css'
  ]
})
export class DashboardFemmesComponent implements OnInit {
  femmes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/femmes').subscribe({
      next: data => this.femmes = data,
      error: () => alert('Erreur lors du chargement des femmes')
    });
  }
}
