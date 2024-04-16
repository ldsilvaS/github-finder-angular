import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService){}

  nome: string = 'ldsilvaS'
  user: any;

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.api.getUser(this.nome).subscribe((response) => {
      this.user = response
      console.log(response)
    })
  }
}
