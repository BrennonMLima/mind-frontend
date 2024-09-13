import React from 'react';
import styled from 'styled-components';

interface TdProps {
    children: React.ReactNode;
    alignCenter?: boolean;
    width?: string;
    onlyWeb?: boolean;
  }

const Tr: React.FC<TdProps> = ({ children, alignCenter, width, onlyWeb }) => {
    return (
      <tr
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 15px',
          alignItems: 'center',
        }}
      >
        {children}
        {onlyWeb && (
          <span style={{ display: 'none' }}> (Somente Web)</span>
        )}
      </tr>
    );
  };

export default Tr;
