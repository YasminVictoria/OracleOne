import React from 'react';

import { Icone } from '../UI';

import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";

const claro = <Icone src={ThemeOn} alt="Tema Claro" />
const escuro = <Icone src={ThemeOff} alt="Tema Escuro" />

export default ({ tema }) => (tema ? escuro : claro)