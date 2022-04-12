//importaciones 
import React, {Component} from 'react';
import Carta from './Carta';
import './Tablero.css';
import './StartApp';

//Definir clase
export default class Tablero extends Component {
    render (){
        //definir variables 
        //const cartas = [1,2,3,4];
        return (
            <div className="tablero"> 
                {
                    this.props.baraja.map((c, index) => {
                        return <Carta 
                            key= {index}
                            icono={c.icono}
                            //encargadad de pasar la carta y guardar
                            seleccionarCarta={() => this.props.seleccionarCartas(c)}
                            estaSiendoComparada= {c.estaSiendoComparada}
        
                        />
                    })
                     
                }
            </div>    
        )
    }
}
