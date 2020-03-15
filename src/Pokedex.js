/*
    APRENDI:
    snippet imrc -> IMport React Component snippet
    usando static defaultProps = { nome da prop : [ { }  { } { } ] }             // array de objetos
    acessando a default props do mesmo componente -> { this.props.pokemon }
        para acessar todos os objetos do array, um por um:  map ( (qualquerNome) => (o que fazer com os objetos ))
            para acessar dentro de cada objeto do array : p.id  p.name  p.type  p.base_experience
*/
import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render(){
        return(
            <div className="Pokedex">
                <h1>POKEDEX</h1>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} /> // criando um componente Pokecard com id/name/type/exp do array de objetos
                    ))}
                </div>
            </div> // no total sao criados n Pokecards onde n é o tamanho do array pokemon: [ ]
        );
    }
}

export default Pokedex;