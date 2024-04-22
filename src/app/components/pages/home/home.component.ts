import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService, private toastr: ToastrService){}

  faUserGroup = faUserGroup;
  faBuilding = faBuilding;
  faLocationDot = faLocationDot;

  valorDoInput: string = '';
  user: any;
  avatarImg: any



  ngOnInit(): void {
    this.getUser()


  }

  showError() {
    this.toastr.error('Usuário não encontrado.', 'Erro na busca!');
  }

  visitProfile() {
    if(this.user && this.user.html_url){
      window.open(this.user.html_url, "_blank")
    }
  }

  limpaUser() {
    this.user = null
  }



  getUser() {
    this.api.getUser(this.valorDoInput).subscribe((response) => {
      this.user = response
      this.avatarImg = this.user.avatar_url;
      console.log(response)
    })
  }
}
