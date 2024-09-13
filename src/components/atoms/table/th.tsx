import React from 'react';

interface ThProps {
  children: React.ReactNode;
  alignCenter?: boolean;
  width?: string;
}

const Th: React.FC<ThProps> = ({ children, alignCenter, width }) => {
  return (
    <th style={{
      padding: '0px',
      textAlign: alignCenter ? 'center' : 'start',
      width: width || 'auto',
    }}>
      {children}
    </th>
  );
};


export default Th;

