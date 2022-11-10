import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TableState {
    keys: string[];
    data: Record<string, {name?: string}>
}

const initialState: TableState = {
    data: {},
    keys: [],
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setKeys(state, action: PayloadAction<string[]>){
            state.keys = action.payload;
        },
        setDataByKey(state, action: PayloadAction<{data: {name: string}; key: string}>){
            const {key,data} = action.payload;
            state.data[key] = {...data};
        }
    },
})

// Action creators are generated for each case reducer function
export const { setKeys,setDataByKey } = tableSlice.actions

export default tableSlice.reducer
