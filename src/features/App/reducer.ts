import { createSlice, type Dispatch } from '@reduxjs/toolkit';
import type { T_AppThunk, T_Reducer } from '../../store/types';
import type { I_AppStore } from './types';

//I_AppStore
const initialState: I_AppStore = {
    isLogged: false,
    isAppLoading: false,
};
export const isLoggedReducer: T_Reducer<I_AppStore, boolean> = (
    state,
    action
) => {
    state.isLogged = action.payload;
};
export const isAppLoadingReducer: T_Reducer<I_AppStore, boolean> = (
    state,
    action
) => {
    state.isAppLoading = action.payload;
};

const appSlice = createSlice({
    name: 'APP',
    initialState,
    reducers: {
        isLogged: isLoggedReducer,
        isAppLoading: isAppLoadingReducer,
    },
});

const { isLogged: setLoggedAction, isAppLoading: seIsAppLoadingAction } =
    appSlice.actions;

export const setIsLogged =
    (isLogged: boolean): T_AppThunk =>
    (dispatch: Dispatch) => {
        dispatch(setLoggedAction(isLogged));
    };
export const setIsAppLoading =
    (isAppLoading: boolean): T_AppThunk =>
    (dispatch: Dispatch) => {
        dispatch(seIsAppLoadingAction(isAppLoading));
    };
export default appSlice.reducer;
