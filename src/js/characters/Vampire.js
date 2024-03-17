import Character from './character'

export default class Vampire extends Character {
  constructor(type = 'vampire') {
    super(type);
    this.attack = 25;
    this.defence = 25;
  }
}