import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Injectable} from 'angular2/core';

@Injectable() //don't forget parens
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
        //return HEROES;
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 4000) // 2 seconds
        );
    }
}