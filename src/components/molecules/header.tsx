import React, { useEffect, useState } from 'react';
import { HeaderStyled, HeaderContainer } from './molecules.styles';
import { BsPersonFillGear } from "react-icons/bs";
import { getUserById } from '../../service/users';
import LogoutModal from './logoutModal';
import UserImage from '../atoms/userimage';

interface User {
  name: string;
  email: string;
  image: { type: string, data: number[] };
}

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUserById();
        setUser(response.data.user);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    }

    fetchUser();
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <h1 style={{ color: "var(--vermelho)" }}>Mind Projects</h1>
      </HeaderContainer>
      <HeaderContainer onClick={handleModalOpen}>
        <UserImage image={user?.image || null} />
        {user && <span style={{ color: "var(--vermelho)" }}>{user.email}</span>}
        <BsPersonFillGear style={{ fill: 'var(--vermelho)' }} />
      </HeaderContainer>
      {isModalOpen && <LogoutModal onClose={handleModalClose} />}
    </HeaderStyled>
  );
};


export default Header;
