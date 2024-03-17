import Character from './character'

export default class Undead extends Character {
  constructor(type = 'undead') {
    super(type);
    this.attack = 40;
    this.defence = 10;
  }
}