import {configureStore} from '@reduxjs/toolkit'
import sliceCities from './sliceCities';
import sliceStates from './sliceStates';
import sliceRegion from './sliceRegion';

const store = configureStore({
    reducer:{
    cities:sliceCities,
    states:sliceStates,
    region:sliceRegion
    },
})

export default store;