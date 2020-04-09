import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AuthService } from "./auth/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

describe("AppComponent", () => {
  const FireStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: "bar" }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
        RouterTestingModule,
      ],
      declarations: [AppComponent, NavbarComponent],
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: FireStub },
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-elteik-knowledgebase'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("angular-elteik-knowledgebase");
  });
});
