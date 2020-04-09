import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(): void {
    this.authService.logout();
  }
}
