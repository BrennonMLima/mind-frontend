import React from 'react';
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { FooterStyled } from './molecules.styles';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
        <p>Todos direitos reservados.</p>
    </FooterStyled>
  );
};

export default Footer;
