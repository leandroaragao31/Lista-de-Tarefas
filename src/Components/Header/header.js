import React from 'react';
import * as S from './style.js';

export default function Header() {
  return (
    <S.Container>
      <h1>Lista de Tarefas</h1>
      <S.Menu>
        <ul>
          <li>Sobre</li>
          <li>Como usar</li>
          <li>Crie sua Propria Lista</li>
        </ul>
      </S.Menu>
    </S.Container>
  );
}
