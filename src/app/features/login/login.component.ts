import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertDialogService } from '@pg/core/dialog/alert-dialog.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private auth: AngularFireAuth,
    private dialog: AlertDialogService,
    private router: Router
  ) { }

  async handlerSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      await this.login(email, password);
      this.router.navigate(['/home']);
    }
  }

  async login(email: string, password: string) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.dialog.open({
        message: 'Error al hacer login',
        type: 'error'
      });
    }
  }
}
