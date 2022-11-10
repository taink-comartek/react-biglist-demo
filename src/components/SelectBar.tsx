import React, {memo, useEffect, useState} from "react";
import SelectMultiple from "./SelectMultiple";
import {useAppDispatch} from "../redux/hooks";
import {setKeys} from "../redux/tableSlice";

function SelectBar(){
    const dispatch = useAppDispatch();
    const [data1, setData1] = useState<string[]>([]);
    const [data2, setData2] = useState<string[]>([]);
    const [data3, setData3] = useState<string[]>([]);
    useEffect(() => {
        const newKeys: string[] = [];
        for (const d1 of data1) {
            for (const d2 of data2) {
                for (const d3 of data3) {
                    newKeys.push(`${d1}-${d2}-${d3}`)
                }
            }
        }
        // data1.forEach(d1 => {
        //     data2.forEach(d2 => {
        //         data3.forEach(d3 => {
        //
        //         })
        //     })
        // })
        dispatch(setKeys(newKeys));
    }, [data1, data2, data3, dispatch])
    return <div style={{display: 'flex', flexDirection: 'row'}}>
        <SelectMultiple placeholder={'1'} onChange={setData1}/>
        <SelectMultiple placeholder={'2'} onChange={setData2}/>
        <SelectMultiple placeholder={'3'} onChange={setData3}/>
    </div>
}

export default memo(SelectBar)
