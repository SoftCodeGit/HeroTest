import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable() //don't forget parens
export class HeroService {
    getHeroes() {
        return HEROES;
    }
}