import { Injectable } from '@angular/core';
import { SocialNetworkMock } from './social-network.mock';

@Injectable({
    providedIn: 'root'
})

export class SocialNetworkService {

    constructor() {}

    getSocialNetwork() {
        try {
            return SocialNetworkMock.filter((mock) => mock.flagShowSocialNetwork === true);
        } catch (error) {
            console.log('Error service SocialNetworkMock ', error); 
        }
    }
}