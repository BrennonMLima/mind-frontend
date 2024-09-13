import React from 'react';
import Button from '../atoms/button/button';
import { SearchBoardlStyled, TextArea } from './molecules.styles';
interface SearchBoardProps {
  onToggleModal: () => void;
  search: string;
  setSearch: (search: string) => void;
}

const SearchBoard: React.FC<SearchBoardProps> = ({ onToggleModal, search, setSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  return (
    <SearchBoardlStyled>
      <TextArea value={search} onChange={handleSearchChange} placeholder='Pesquisar'/>
      <Button onClick={onToggleModal}>+ Novo</Button>
    </SearchBoardlStyled>
  );
};

export default SearchBoard;
