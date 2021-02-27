import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from "@angular/router";
import firebase from 'firebase/app';
import { Observable } from "rxjs";




@Injectable({
    providedIn: 'root'
})

export class Authentication {
    isLoggedIn = false;

    constructor(public firebaseAuth: AngularFireAuth, private route: Router) {}

    async signin(email: string, password: string) {
        await this.firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(val => {
                this.isLoggedIn = true;
                console.log(val);
                this.route.navigate(['suppliers']);     
        })
    }

    logout() {
        this.firebaseAuth.signOut();
        this.route.navigate(['']);
    }
    
}