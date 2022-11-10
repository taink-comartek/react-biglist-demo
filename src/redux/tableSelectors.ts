import {RootState} from "./store";

export function selectKeys(state: RootState): string[] {
    return state.table.keys;
}

export function selectDataByKey(key: string) {
    return function (state: RootState) {
        return state.table.data[key];
    }
}
export function selectDataNameByKey(key: string) {
    return function (state: RootState): string| undefined {
        return state.table.data[key]?.name;
    }
}
