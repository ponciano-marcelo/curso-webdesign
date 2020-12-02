// import React from 'react';

// export default class ButtonMob extends React.Component {

//     constructor () {
//         super();
//         this.state={
//             visNav:'flex'
//         }
//     }
    
//     ButtonMobClicado () {
//         if(this.state.visNav === 'flex'){

//             this.setState({
//                 visNav: 'none'
//             }
//             );
//         } else {
//             this.setState({
//                 visNav: 'flex'
//             })
//         }

//         document.querySelector('.nav').style.display = this.state.visNav;
//     }
//     render(){
//         return (
//             <div className="buttonmob" onClick={this.ButtonMobClicado.bind(this)}>
//                 <img src="img/menu.png" alt="Botão Menu" />
//             </div>
//         );
//     }
// }

import React, { useState } from 'react';

 const ButtonMob = () => {

    const [visNav, setVisNav] = useState('flex');
    
    function ButtonMobClicado () {
        if(visNav === 'flex'){

            setVisNav('none');
            
        } else {
            setVisNav('flex');
        }
       document.querySelector('.nav').style.display = visNav;
    }
        return (
            <div className="buttonmob" onClick={ButtonMobClicado}>
                <img src="img/menu.png" alt="Botão Menu" />
            </div>
        );
}

export default ButtonMob;