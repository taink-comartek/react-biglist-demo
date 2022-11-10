import { Select, SelectProps } from 'antd';
import React, {memo, useCallback, useState} from 'react';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}

interface Props {
    placeholder: string;
    onChange: (values: string[]) => void;
}

const SelectMultiple: React.FC<Props> = ({placeholder, onChange}) => {
    return (<Select
        mode="tags"
        style={{width: '100%'}}
        placeholder={placeholder}
        onChange={onChange}
        options={options}
    />)
};

export default memo(SelectMultiple);
