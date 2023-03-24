// does not export a react component 
// that's why campsites is lower case

import {CAMPSITES} from '../../app/shared/CAMPSITES'

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
}