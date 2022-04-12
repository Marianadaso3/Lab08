//importaciones 
import React, {Component} from 'react';
import './Carta.css';
import ReactCardFlip from 'react-card-flip';

//Definir la clase carta
export default class Carta extends Component {


    render () {
        return (
            <div className="carta" onClick={this.props.seleccionarCarta}>
                <ReactCardFlip
                    //permite voltear el resto de cartas 
                    // isFlipped = {this.props.estaSiendoComparada || this.props.fueAdivinada}
                    isFlipped = {this.props.estaSiendoComparada}
                    // disabled = {true}
                >
                    <div className="portada"></div>
                    <div className="contenido">
                        <i className={`fa ${this.props.icono} fa-5x`}></i>
                    </div>
                </ReactCardFlip>
                
            </div>
        )
    }
};
