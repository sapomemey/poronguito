import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  signOut() {
    this.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
