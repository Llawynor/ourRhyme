import React from 'react';
import { MyInput } from '../meusComponentes/myInput';
import { MyButton } from '../meusComponentes/myButton';

export const ViewCadastrar = ( { registerClick, mostrarViewLogin } ) => (
    <div id="divCadastrar">
        <MyInput divId="divInputEmailCad" inputId="inputEmailCad" labelText="E-mail:" placeholder="Digite seu e-mail" type="email" />
        <MyInput divId="divInputSenhaCad" inputId="inputSenhaCad" labelText="Senha:" placeholder="Digite sua senha" type="password" />
        <MyInput divId="divInputSenha2Cad" inputId="inputSenha2Cad" labelText="Senha:" placeholder="Digite sua senha novamente" type="password" />
        <MyButton divId="divBtnCadastrar" buttonId="btnCadastrar" buttonText="Cadastrar" type="button" onClick={ registerClick } />
        <div className="showOpcoesAuth">
            <div className="borderTop"></div>
            <div id="showViewLogin" className="baseOpsAuth" onClick={ mostrarViewLogin }>
                <p>Já tem uma conta?</p>
            </div>
        </div>
    </div>
);