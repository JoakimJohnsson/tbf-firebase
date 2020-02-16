import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const devConfig = {
    apiKey: "AIzaSyDZMDQ2FSK8ju3XLyohdQ4UA_L14O4ltwA",
    authDomain: "the-baseball-field.firebaseapp.com",
    databaseURL: "https://the-baseball-field.firebaseio.com",
    projectId: "the-baseball-field",
    storageBucket: "the-baseball-field.appspot.com",
    messagingSenderId: "401723443170",
    appId: "1:401723443170:web:846935761f64d517fe5bbb"
};

const prodConfig = {
    apiKey: "AIzaSyA4yBmSmQ-RLTzroqIYkr9A42VQcl_Zh1Y",
    authDomain: "thebaseballfield.firebaseapp.com",
    databaseURL: "https://thebaseballfield.firebaseio.com",
    projectId: "thebaseballfield",
    storageBucket: "thebaseballfield.appspot.com",
    messagingSenderId: "115379456982",
    appId: "1:115379456982:web:4d0adc5c1a56b0579b7277"
};

let showProductionConfiguration = process.env.NODE_ENV === 'production';
const firebaseConfig = showProductionConfiguration ? prodConfig : devConfig;

class Firebase {
    constructor() {
        console.log("Show production configuration:   " + showProductionConfiguration);
        app.initializeApp(firebaseConfig);
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
}

export default Firebase;
