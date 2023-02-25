import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private userService: UserService, private router: Router){ }

  ngOnInit(): void{
  }

  username: string;
  password: string;
  message: string

  login(){
    this.userService.login(this.username, this.password).subscribe((user: User)=>{
      if(user && user.status=="aktivan"){
        if(user.type==0){
          this.router.navigate(['/ucesnik']);
        }else {
          if(user.type==1){
            this.router.navigate(['/organizator']);
          }
        }
      }
      else this.message = "Bad data"
    })

  }

}
