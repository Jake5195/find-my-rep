import { combineReducers } from 'redux';
import representatives from './representatives';

export interface Action {
    type: string;
    payload?: any;
}

const rootReducer = combineReducers({
    representatives,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
