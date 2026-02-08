import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function FarsiSection({ children }: Props) {
  return (
    <div
      style={{
        direction: 'rtl',
        textAlign: 'right',
        fontFamily: "'Vazirmatn', Tahoma, Arial, sans-serif"
      }}
    >
      {children}
    </div>
  );
}

export function EnglishSection({ children }: Props) {
  return (
    <div
      style={{
        direction: 'ltr',
        textAlign: 'left'
      }}
    >
      {children}
    </div>
  );
}

export default { FarsiSection, EnglishSection };
