import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <table style={{ width: '100%', maxWidth: '1120px', margin: '20px auto' }}>
      {children}
    </table>
  );
};

export default Table;
