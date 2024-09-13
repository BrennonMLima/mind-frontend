import React, { useEffect, useState } from 'react';
import { HeaderStyled, HeaderContainer } from './molecules.styles';
import { BsPersonFillGear } from "react-icons/bs";
import { getUserById } from '../../service/users';
import LogoutModal from './logoutModal';
import UserImage from '../atoms/userimage';

interface User {
  name: string;
  email: string;
  image: {type:string, data: number[]};
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

  function convertImage(data: number[]): string {
    const byteArray = new Uint8Array(data);
    let binary = '';
    byteArray.forEach((byte) => binary += String.fromCharCode(byte));
    const base64 = window.btoa(binary);
    return `data:image/jpeg;base64,${base64}`;
  }

  return (
    <HeaderStyled>
      <HeaderContainer>
        <h1>Minhas Finanças</h1>
      </HeaderContainer>
      <HeaderContainer onClick={handleModalOpen}>
        <UserImage image={user?.image || null}/>
        {user && <span>{user.email}</span>}
        <BsPersonFillGear />
      </HeaderContainer>
      {isModalOpen && <LogoutModal onClose={handleModalClose} />}
    </HeaderStyled>
  );
};


export default Header;
