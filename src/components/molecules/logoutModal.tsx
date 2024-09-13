import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { removeCookie } from 'typescript-cookie';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/button/button';
import { ModalOverlay, ModalContent } from './molecules.styles';
import { TbLogout } from "react-icons/tb";

interface LogoutModalProps {
  onClose: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleLogout = () => {
    removeCookie('auth-token');
    navigate('/login');
    window.location.reload();
  };

  return (
    <ModalOverlay>
      <ModalContent ref={modalRef}>
        <Button onClick={handleLogout} icon={<TbLogout/>}>Sair</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LogoutModal;
