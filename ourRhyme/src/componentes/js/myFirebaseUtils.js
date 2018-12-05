import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB82D33FJB2qW7AuEesCCiRAN_L5QP7JTo",
    authDomain: "ourrhyme.firebaseapp.com",
    databaseURL: "https://ourrhyme.firebaseio.com",
    projectId: "ourrhyme",
    storageBucket: "ourrhyme.appspot.com",
    messagingSenderId: "13079054445"
};
firebase.initializeApp(config);

export default class FirebaseUtils {

    constructor () {

        this.firebaseImp = firebase;
        this.database = this.firebaseImp.database();
        this.auth = this.firebaseImp.auth();

    }

    getDatabase () {
        return this.database;
    }

    getAuth () {
        return this.auth;
    }

    login (email, senha) {
        this.getAuth().signInWithEmailAndPassword(email, senha);
    }

    cadastrarUsuario ( email, senha, senha2) {
        if(senha === senha2) {
            this.auth.createUserWithEmailAndPassword( email, senha )
            return "Cadastro feito com sucesso!";
        }
        else {
            return "As senhas não coincidem!";
        }
    }

    deslogar () {
        this.getAuth().signOut();
    }

}
