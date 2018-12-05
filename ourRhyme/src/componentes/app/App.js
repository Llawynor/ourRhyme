import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FirebaseUtils from './../js/myFirebaseUtils';
import './../css/App.css';
import { ViewAuth } from './../views/viewAuth';
import { ViewCadastrar } from './../views/viewcadastrar';
import { MyButton } from '../meusComponentes/myButton';

class App extends Component {

  constructor () {
    super();

    this.appTitle = "OurRhyme";
    this.appHeader = null;
    this.appInterface = null;
    this.appFooter = null;

    this.myFirebaseUtils = new FirebaseUtils();

    this.myFirebaseUtils.getAuth().onAuthStateChanged(function(user){
      if (user) {
        console.log("Logou!");
        document.getElementById('appFooter').className = "";
        document.getElementById('divBtnSair').className = "divMyButton "
        document.getElementById('auth').className = "hidden"
        document.getElementById('emailInput').value = '';
        document.getElementById('senhaInput').value = '';
        document.getElementById('appHeader').style.height = "125px";
        document.getElementById('appHeader').style.minHeight = "unset";
      }
      else {
        console.log("Está deslogado!");
        document.getElementById('appInterface').className = "hidden";
        document.getElementById('appFooter').className = "hidden";
        document.getElementById('divBtnSair').className = "hidden"
        document.getElementById('auth').className = ""
        document.getElementById('appHeader').style.minHeight = "100vh";
      }
    });
  }

  init () {
    
    this.appHeader = document.getElementById('appHeader');
    this.appInterface = document.getElementById('appInterface');
    this.appFooter = document.getElementById('appFooter');
    if( this.appHeader == null || this.appInterface == null || this.appFooter == null )
    {
      setTimeout(() => { this.init() }, 1500);
    }
    else {
      this.carregarMetaTags();
      this.carregarDivAuth();
    }
  }

  carregarMetaTags () {

  }

  carregarDivAuth () {
    this.appDivAuth = document.getElementById('auth');
    this.appDivAuth.className = '';
    setTimeout( () => { this.appDivAuth.style.opacity = 1 }, 250);
  }

  loginClick (email, senha) {
    this.myFirebaseUtils.login(email, senha);
  }

  deslogar () {
    this.myFirebaseUtils.deslogar();
    console.log('Usuário deslogado!');
  }

  mostrarViewCadastrar () {
    ReactDOM.render(<ViewCadastrar registerClick={ () => { this.registerClick( document.getElementById('inputEmailCad').value, document.getElementById('inputSenhaCad').value, document.getElementById('inputSenha2Cad').value ) } } mostrarViewLogin={ () => { this.mostrarViewLogin() } } />, document.getElementById('divAuth'));
  }

  mostrarViewLogin () {
    ReactDOM.render(<ViewAuth loginClick={ () => { this.loginClick( document.getElementById('emailInput').value, document.getElementById('senhaInput').value ) } } mostrarViewCadastrar={ () => { this.mostrarViewCadastrar() } } />, document.getElementById('divAuth'));
  }

  registerClick (email, senha, senha2) {
    this.myFirebaseUtils.cadastrarUsuario(email, senha, senha2)
  }

  render() {
    return (
      <div className="App">
        <header id="appHeader">
          <div id="auth" className="hidden">
            <h1 id="appTitle">{ this.appTitle }</h1>
            <div id="divAuth">
              <ViewAuth loginClick={ () => { this.loginClick( document.getElementById('emailInput').value, document.getElementById('senhaInput').value ) } } mostrarViewCadastrar={ () => { this.mostrarViewCadastrar() } } />
            </div>
          </div>
        </header>
        <div id="appInterface" className="hidden">

        </div>
        <footer id="appFooter" className="hidden">
          <p>&copy;Todos os direitos reservados!</p>
          <MyButton divClass="hidden" divId="divBtnSair" buttonId="btnSair" type="button" onClick={ () => { this.deslogar() } } buttonText="Sair" />
        </footer>
        { this.init() }
      </div>
    );
  }
}

export default App;
