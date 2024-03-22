import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'register',
  standalone: true,
  imports: [CommonModule, RouterLink, NavBarComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public fullName = "";
  public email = "";
  public username = "";

onSubmit () {
  console.log('First & Last Name: ${this.fullName}  ')
  console.log('            Email: ${this.email}     ')
  console.log('         Username: ${this.username}  ')
  }

}
