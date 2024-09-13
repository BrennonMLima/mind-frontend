import React from 'react';
import { ModalHeaderStyled } from './molecules.styles';
import Button from '../atoms/button/button';
import { IoCloseSharp } from "react-icons/io5";

interface ModalTitle {
    title: string;
    onClose?: () => void;
  }

  const ModalHeader: React.FC<ModalTitle> = ({ title,onClose }) => {
    return (
        <ModalHeaderStyled>
            <h1>{title}</h1>
            <IoCloseSharp className='action-icon' onClick={onClose}></IoCloseSharp>
        </ModalHeaderStyled>
        )
}
export default ModalHeader;