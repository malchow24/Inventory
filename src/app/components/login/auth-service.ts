import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from "@angular/router";
import firebase from 'firebase/app';
import { BehaviorSubject } from "rxjs";




@Injectable({
    providedIn: 'root'
})

export class Authentication {
    public loggedIn = new BehaviorSubject<boolean>(false);

    constructor(public firebaseAuth: AngularFireAuth, private route: Router) {}

    async signin(email: string, password: string) {
        await this.firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(val => {
                this.loggedIn.next(true);
                console.log(val);
                this.route.navigate(['home']);     
        })
    }

    logout() {
        this.firebaseAuth.signOut();
        this.route.navigate(['']);
    }
    
}