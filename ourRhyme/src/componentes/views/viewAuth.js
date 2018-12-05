import React from 'react';
import { MyInput } from './../meusComponentes/myInput';
import { MyButton } from './../meusComponentes/myButton';

export const ViewAuth = ( { loginClick, mostrarViewCadastrar, esqueciMinhaSenha } ) => (
    <div>
        <MyInput divId="emailDivAuth" labelText="E-mail:" inputId="emailInput" type="email" placeholder="Digite seu e-mail" />
        <MyInput divId="senhaDivAuth" labelText="Senha:" inputId="senhaInput" type="password" placeholder="Digite sua senha" />
        <MyButton divId="divLoginButton" buttonId="btnLogin" typpe="button" onClick={ loginClick } buttonText="Entrar" />
        <div className="borderTop"></div>
        <div className="showOpcoesAuth">
            <div id="showViewCadastrar" className="baseOpsAuth" onClick={ mostrarViewCadastrar }>
                <p>Quer criar uma conta?</p>
            </div>
            <div id="divEsqueciMinhaSenha" className="baseOpsAuth" onClick={ esqueciMinhaSenha }>
                <p>Esqueceu a senha?</p>
            </div>
        </div>
    </div>
);