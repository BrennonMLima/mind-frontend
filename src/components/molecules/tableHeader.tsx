import { TableHeaderStyled } from './molecules.styles';
import Th from '../atoms/table/th';
import Tr from '../atoms/table/tr';

const TableHeader = () => {
  return (
    <TableHeaderStyled>
      <Tr>
        <Th width="37%">Descrição</Th>
        <Th width="15%">Valor</Th>
        <Th width="15%">Tipo</Th>
        <Th width="15%">Categoria</Th>
        <Th width="15%">Data</Th>
        <Th width="5%">Ações</Th>
      </Tr>
    </TableHeaderStyled>
  );
};

export default TableHeader;
