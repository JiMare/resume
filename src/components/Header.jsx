import React from 'react'

export const Header = ({name, role}) => {
  return (
    <header className="header">
      <div className="headers">
        <h1>{name}</h1>
        <h2>{role}</h2>
      </div>
    </header>
  );
}
