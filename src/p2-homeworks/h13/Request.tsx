import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {api} from "./RequestsAPI";


export const Request = () => {

    const [response, setResponse] = useState('Loading response after click for checkbox')
    const [error, setError] = useState('I think that all ok')

    const onChangeChecked = (value: boolean) => {
        api.create(value).then((data)=>{
            setResponse(data.data.info)
            setError(data.data.errorText)
        })
            .catch(err => {
                setError(err.message)
                setResponse('')
            })
    }

    return (
            <div>
                <SuperCheckbox onChangeChecked={onChangeChecked}/>
                <h2>{response}</h2>
                <h3>if error: {error}</h3>
            </div>
        );

}
