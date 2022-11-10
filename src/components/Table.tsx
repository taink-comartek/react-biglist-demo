
// Usage
import React, {ChangeEventHandler, memo, useCallback, useMemo, useState} from "react";
import VirtualTable from "./VirtualTable";
import {Input, Table as TableAnt, TableColumnsType} from 'antd'
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {selectDataByKey, selectDataNameByKey, selectKeys} from "../redux/tableSelectors";
import {setDataByKey} from "../redux/tableSlice";
// render?: (value: any, record: RecordType, index: number) => React.ReactNode | RenderedCell<RecordType>;

interface CellEditProps {
    k: string;
}

function CellEditContainer({k}: CellEditProps){
    const dispatch = useAppDispatch();
    const selector = useMemo(() => selectDataNameByKey(k), [k])
    const data = useAppSelector(selector);
    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        dispatch(setDataByKey({data: {name: e.target.value}, key: k}));
    },[dispatch, k])
    console.log(data)
    return (<Input placeholder="Basic usage" value={data} onChange={onChange} />)
}

const CellEdit = memo(CellEditContainer);

const columns = [
    { title: 'A', dataIndex: 'key', width: 300 },
    { title: 'B', dataIndex: 'key1',  },
    { title: 'C', dataIndex: 'key2',},
    { title: 'D', dataIndex: 'key3', },
    { title: 'E', dataIndex: 'key4',  },
    {
        title: 'F',
        dataIndex: 'key5',
        render(v: string, r: any, i: number){
            return <CellEdit k={v} />
        }
    },
];

// const data = Array.from({ length: 100000 }, (_, key) => ({ key }));

const Table: React.FC = () => {
    const keys = useAppSelector(selectKeys);
    const data = useMemo(() => keys.map(key => ({key, key1: key+1, key2: key+2, key3: key+3, key4: key+4, key5: key+5 })),[keys])
    return (
        <>
            <VirtualTable pagination={false} columns={columns} dataSource={data} scroll={{ y: 300, x: '100vw' }} />
            <div>Total {keys.length}</div>
        </>
    )
};

export default memo(Table);
