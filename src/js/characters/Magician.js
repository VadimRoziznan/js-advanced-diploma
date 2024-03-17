import Character from './character'

export default class Magician extends Character {
  constructor(type = 'magician') {
    super(type);
    this.attack = 10;
    this.defence = 40;
  }
}