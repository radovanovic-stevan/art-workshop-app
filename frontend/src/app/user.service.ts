import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  login(username, password){
    const data={
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/users/login`, data);
  }

  addPicture(data){
    return this.http.post(`${this.uri}/users/picture`, data);
  }

  registerUser(firstname, lastname, username, password, phoneNumber, email, ogranizationName, ogranizationAddress, organizationMN, status, type, slika){
    const data={
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      phoneNumber: phoneNumber,
      email: email,
      ogranizationName: ogranizationName,
      ogranizationAddress: ogranizationAddress,
      organizationMN: organizationMN,
      status: status,
      type: type,
      slika: slika
    }
    return this.http.post(`${this.uri}/users/register`, data);
  }
}



