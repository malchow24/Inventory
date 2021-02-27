import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from "rxjs";




@Injectable({
    providedIn: 'root'
})

export class Authentication {
    user: Observable<firebase.User>;
    email: string = 'omalchow@uwm.edu';
    password: string = 'owstertoaster';
    constructor(public auth: AngularFireAuth) {
    }

    login() {
    this.auth
    .signInWithEmailAndPassword(this.email, this.password)
    .then(value => {
        console.log('valid user');
    })

    }

    logout() {
        this.auth.signOut();
    }
    
}