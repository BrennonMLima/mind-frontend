import React from 'react';

interface TdProps {
  children: React.ReactNode;
  alignCenter?: boolean;
  width?: string;
  onlyWeb?: boolean;
}

const Td: React.FC<TdProps> = ({ children, alignCenter, width, onlyWeb }) => {
  return (
    <td
      style={{
        paddingTop: '20px',
        textAlign: alignCenter ? 'center' : 'start',
        width: width || 'auto',
        alignItems: 'center',
      }}
    >
      {children}
      {onlyWeb && (
        <span style={{ display: 'none' }}> (Somente Web)</span>
      )}
    </td>
  );
};

export default Td;
