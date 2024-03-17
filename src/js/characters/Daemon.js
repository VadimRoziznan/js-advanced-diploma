import Character from './character'

export default class Daemon extends Character {
  constructor(type = 'daemon') {
    super(type);
    this.attack = 10;
    this.defence = 10;
  }
}