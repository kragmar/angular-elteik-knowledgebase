import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = new BehaviorSubject(this.authService.isLoggedIn).asObservable();
  }

  onLogout() {
    this.authService.logout();
  }

}
