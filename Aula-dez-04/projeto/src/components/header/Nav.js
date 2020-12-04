import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Logo from './Logo'
import ButtonMob from './ButtonMob'

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visNav: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            visNav: !this.state.visNav
        });
    }

    render(){
        const mostraNav = this.state.visNav;
        return (
            <div>
                <Logo src="/img/logo-pequeno.jpg" mostra={mostraNav}/>
                <div className={mostraNav ? "nav" : "nav display"}>
                    <AnchorLink href="#home">Home</AnchorLink>
                    <AnchorLink href="#photo">Foto</AnchorLink>
                    <AnchorLink href="#information">Informações</AnchorLink>
                    <AnchorLink href="#contact">Contato</AnchorLink>
                </div>
                {mostraNav ?
                <ButtonMob src="/img/menu.png" alt="Botão Menu" handleClick={this.handleClick} />    
                :
                <ButtonMob src="/img/close.png" alt="Botão Menu" handleClick={this.handleClick} /> 
                }
            </div>
        );
    }
}

export default Nav