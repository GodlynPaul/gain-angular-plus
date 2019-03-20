import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registeredUser;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    debugger;
    this.route.paramMap.subscribe((paramMap:any) => {
      this.registeredUser = paramMap.params['user'];
      // this.registeredUser = paramMap.get('user');

    });
  }

}
