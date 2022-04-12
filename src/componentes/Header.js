//importaciones
import React, {Component} from 'react';
import './Header.css';

//declarar clase 
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="titulo"> Bienvenido al juego de memoria</div>
                <div>
                    <button className='boton-reiniciar' onClick={this.props.resetearPartida}>
                        Reiniciar
                    </button>
                </div>
                <div className='titulo'>
                    Intentos: {this.props.numeroDeIntentos}
                </div>
            </header>
        )
    }
};
