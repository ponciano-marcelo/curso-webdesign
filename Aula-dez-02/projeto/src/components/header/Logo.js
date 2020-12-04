import React from 'react'

function Logo (props) {
  const mostra = props.mostra;
    return (
      <div className={mostra ? 'logo' : 'logo display'}>
        <img className="img-logo" src={props.src} alt={props.alt} />
      </div>
    );
}

export default Logo