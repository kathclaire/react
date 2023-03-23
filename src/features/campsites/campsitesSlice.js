// does not export a react component 
// that's why campsites is lower case

import {CAMPSITES} from '../../app/shared/CAMPSITES'

export const selectAllCampsite = () => {
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}