import { Component, NgZone, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private servis: UserService, private ngZone: NgZone,
    private registerService: UserService,
    private router: Router,
    private _ngZone: NgZone) { }

  ngOnInit(): void {

  }


  buttonDisabledR: boolean = false;

  firstname: string = "";
  lastname: string = "";
  username: string = "";
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  email: string;
  ogranizationName: string;
  ogranizationAddress: string
  organizationMN: number;
  status: string;
  type: number;
  slika: string;

  korisnickoImeGreska: string;
  korisnickoPrezimeGreska: string;
  usernameGreska: string;
  lozinkaGreska: string;
  potvrdiLozinkuGreska: string;
  telefonGreska: string;
  mejlGreska: string;

  formData = new FormData();

  imgType :string ;
  height : number;
  width : number;
  isLoaded : boolean = false;
  errorPic: string;
  errorFound: boolean;
  pic: string;

  validate(): boolean {

    if (/^[a-zA-Z]\w*$/.test(this.firstname) == false) {
        this.korisnickoImeGreska = "Korisnicko ime nije u dobrom formatu.";
    } else {
      this.korisnickoImeGreska = "";
    }

    if (/^[a-zA-Z]\w*$/.test(this.lastname) == false) {
        this.korisnickoPrezimeGreska = "Korisnicko ime nije u dobrom formatu.";
    }  else {
      this.korisnickoPrezimeGreska = "";
    }

    if (/^[a-zA-Z]\w*$/.test(this.username) == false) {
        this.usernameGreska = "Korisnicko ime nije u dobrom formatu.";
    } else {
      this.usernameGreska = "";
    }

    if(/^\+3816\d{7,8}$/.test(this.phoneNumber) == false) {
        this.telefonGreska = "Telefon nije u dobrom formatu.";
    } else {
      this.telefonGreska = "";
    }

    if(/^\w+@[a-z]+\.[a-z]{2,3}$/.test(this.email) == false) {
        this.mejlGreska = "Mejl nije u dobrom formatu.";
    } else {
      this.mejlGreska = "";
    }

    if(
        /^.{8,16}$/.test(this.password) == false ||
        /[a-z]/.test(this.password) == false ||
        /[A-Z]/.test(this.password) == false ||
        /[$&+,:;=?@#|'<>.^*()%!-]/.test(this.password) == false ||
        /\d/.test(this.password) == false) {
        this.lozinkaGreska = "Lozinka nije u dobrom formatu.";
    } else {
      this.lozinkaGreska = "";
    }

    if(
      this.password !== this.confirmPassword
    ) {
      this.potvrdiLozinkuGreska = "Lozinka nije ista"
    } else {
      this.potvrdiLozinkuGreska = ""
    }

    return !(
      !!this.korisnickoImeGreska && 
      !!this.korisnickoPrezimeGreska && 
      !!this.usernameGreska && 
      !!this.telefonGreska && 
      !!this.mejlGreska && 
      !!this.lozinkaGreska
    )
  }

  register() {
    if(!this.validate()) return;
    if(this.buttonDisabledR == false){
      this.servis.registerUser(this.firstname, this.lastname, this.username, this.password, this.phoneNumber, this.email, this.ogranizationName="", this.ogranizationAddress="", this.organizationMN=0, this.status="", this.type = 0, this.slika).subscribe((resp)=>{
        if(resp['message']=='user added'){
          
          this.formData.append('username',this.username);
          this.servis.addPicture(this.formData).subscribe(
            (resPic) => {
              if(resPic['message']=='picture added'){
                alert("OK")
              }else{
                alert("ERROR")
              }
            }
          )

        }else{
          alert("UserName is already in use")
        }
      })
    }else{
      this.servis.registerUser(this.firstname, this.lastname, this.username, this.password, this.phoneNumber, this.email, this.ogranizationName, this.ogranizationAddress, this.organizationMN, this.status="", this.type = 1, this.slika).subscribe((resp)=>{
        if(resp['message']=='user added'){
          alert("OK")
        }else{
          alert("ERROR")
        }
      })
    }
  }

  fileChangeEvent(event: any) {
    console.log(event);
    if(!event.target.value) return;
    const file = event.target.files[0] as File;
    if(!file) return;
    this.formData = new FormData();
    this.formData.append('slika',file,file.name);
  }

}