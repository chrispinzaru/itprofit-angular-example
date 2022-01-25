import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  loginForm: LoginForm = {
    login: '',
    password: '',
  }

  constructor() { }



  ngOnInit(): void {
  }

}

type LoginForm = {
  login: string,
  password: string,
}
