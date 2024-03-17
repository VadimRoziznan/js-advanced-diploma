import Character from '../Character'

export default class Bowman extends Character {
    constructor(type = 'bowman') {
        super(type);
        this.attack = 25;
        this.defence = 25;
    }
}