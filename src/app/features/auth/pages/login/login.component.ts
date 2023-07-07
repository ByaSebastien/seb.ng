import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginForm } from '../../forms/login.form';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastr: NbToastrService,
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({...LoginForm});
  }

  submit() {
    if(this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value).subscribe({
      next: (result) => {
        this.router.navigate(['book', 'index']);
        this.toastr.info('Welcome ' + result.username);
      },
      error: ({error}) => {
        this.toastr.danger(error)
      }
    });

  }
  
}
