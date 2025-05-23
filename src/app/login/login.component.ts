import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterModule, ActivatedRoute} from '@angular/router';
import {AuthService} from '../services/auth.service'; // chemin à adapter
import {Authenticationrequest} from '../models/authenticationrequest';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    //Two-way-binding
    //username = '';
    //password = '';

    //Reactive form
    loginForm: FormGroup;
    errorMsg: string = '';
    submitted: boolean = false;
    returnUrl: string = '/home';

    ngOnInit(): void {
        console.log('ng on init');
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router,
        private formBuilder: FormBuilder) {

        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }


    onSubmit() {

        this.submitted = true;
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        const credentials = this.loginForm.value;

        this.authService.login(credentials)
            .subscribe({
                next: (response) => {
                    console.log('Success login', response);
                    this.router.navigate(['/ambassador']);
                },
                error: (err) => {
                    this.errorMsg = 'Email ou mot de passe est incorrecte';
                }
            });
    }

    //loginForm: FormGroup;
    //isLoading = false;
    //errorMessage = '';
    //authrequest : Authenticationrequest = new Authenticationrequest()


    /*  constructor(private authService: AuthService ,
         private router: Router,
         private toastr : ToastrService
      ) {
        this.loginForm = new FormGroup({


                     email : new FormControl ('',[Validators.required,Validators.minLength(3)]),
                     password : new FormControl ('',[Validators.required,Validators.minLength(3)])
         })}*/


    /* role : any;
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

 */
    /*toggleView() {
      // à implémenter si tu gères plusieurs vues
    }*/
}
