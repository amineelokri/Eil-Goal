import { Component, inject } from "@angular/core";
import { Auth, User, user, authState, idToken } from "@angular/fire/auth";
import { Subscription } from "rxjs";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  
  //This part helps change dynamically the login form to the forgotten password Form
  showForgottenPasswordForm: boolean = false;
  toggleForgottenPasswordForm() {
    this.showForgottenPasswordForm = !this.showForgottenPasswordForm;
  }
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
  
  user$ = user(this.auth);
  userSubscription: Subscription;
  title = "eilgoal";

  constructor(auth: Auth, private snackBar: MatSnackBar) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(aUser);
    });
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.userSubscription.unsubscribe();
  }
  
}
