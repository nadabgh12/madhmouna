import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service'; // chemin à adapter
import { Authenticationrequest } from '../models/authenticationrequest';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
   
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  authrequest : Authenticationrequest = new Authenticationrequest()




  constructor(private authService: AuthService ,
     private router: Router,
     private toastr : ToastrService
  ) {
    this.loginForm = new FormGroup({


                 email : new FormControl ('',[Validators.required,Validators.minLength(3)]),
                 password : new FormControl ('',[Validators.required,Validators.minLength(3)])
     })}




    role : any;
  ngOnInit(): void {


    // this.role = localStorage.getItem('role');
    // console.log("Role from localStorage:", this.role);


  }


  get password(){
    return this.loginForm.get('password')
  }
  get email(){
    return this.loginForm.get('email')
  }




  login(): void {
    this.authrequest.email = this.loginForm.value.email;
    this.authrequest.password = this.loginForm.value.password;


    console.log("Login Request:", this.authrequest);


    this.authService.login(this.authrequest).subscribe({
      next: (response: any) => {
        console.log("Login success");
this.toastr.success("login success")        

//this.toastr.info("login success")        

       // this.authService.setUserToken(response);


           this.router.navigate(['/ambassador']);
      },
      error: (error) => {
        console.error('Login error:', error);
        this.toastr.error("verifié")        

      }
    });
  }










  gotoregister(){
    this.router.navigate(['/register']);


  }
















 

  toggleView() {
    // à implémenter si tu gères plusieurs vues
  }
}
