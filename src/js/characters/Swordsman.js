import Character from './character'

export default class Swordsman extends Character {
  constructor(type = 'swordsman') {
    super(type);
    this.attack = 40;
    this.defence = 10;
  }

  
}