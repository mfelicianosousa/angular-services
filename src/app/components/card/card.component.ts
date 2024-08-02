import { Component, input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  pokemon: PokemonData = {
    name: '',
    id: 0,
    sprites: {
      front_default: ''
    },
    stats: [],
    types: [],
  }

  attrTypes: string[] = ['normal','fire','grass','electric','ice' ,'water','ground', 'rock','fairy','poison','bug','ghost','dragon', 'psychic','fighting'];
  attrTypesColor: string[] = ['#F5F5F5','#FDDFDF','#DEFDE0','#DEF3FD','#DEF3FD','#F4E7DA','#D5D5D4','#FCEAFF','#98D7A5','#F8D5A3','#CAC0F7','#97B3E6','#EAEDA1','#E6E0D4'];
  type: string = 'normal';


  constructor(private service: PokemonService){

    this.type = 'normal';
  }

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }
  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) =>{
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            stats: res.stats,
            types: res.types
          }
        },
        error: (err) => console.log('Not Found')
      }
    );
  }

  getTypeColor( type: string):string {
     const normal= '#F5F5F5'
     return {
       normal,
       fire: '#FDDFDF',
       grass: '#DEFDE0',
       electric: '#FCF7DE',
       ice: '#DEF3FD',
       water: '#DEF3FD',
       ground: '#F4E7DA',
       rock: '#D5D5D4',
       fairy: '#FCEAFF',
       poison: '#98D7A5',
       bug: '#F8D5A3',
       ghost: '#CAC0F7',
       dragon:'#97B3E6',
       psychic: '#EAEDA1',
       fighting: '#E6E0D4'

     }[type]|| normal
  }

}
