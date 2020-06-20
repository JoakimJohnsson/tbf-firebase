import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA4yBmSmQ-RLTzroqIYkr9A42VQcl_Zh1Y",
    authDomain: "thebaseballfield.firebaseapp.com",
    databaseURL: "https://thebaseballfield.firebaseio.com",
    projectId: "thebaseballfield",
    storageBucket: "thebaseballfield.appspot.com",
    messagingSenderId: "115379456982",
    appId: "1:115379456982:web:4d0adc5c1a56b0579b7277"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.serverValue = app.database.ServerValue;
        this.auth = app.auth();
        this.db = app.database();
    }

    // Auth api
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
    doSendEmailVerification = () =>
        this.auth.currentUser.sendEmailVerification({
            url: 'https://www.thebaseballfield.se',
        });

    // *** Merge Auth and DB User API *** //
    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();
                        // default empty roles
                        if (!dbUser.roles) {
                            dbUser.roles = {};
                        }
                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            providerData: authUser.providerData,
                            ...dbUser,
                        };
                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    // User api
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
    // Artists api
    artist = uid => this.db.ref(`artists/${uid}`);
    artists = () => this.db.ref('artists');
}

export default Firebase;
