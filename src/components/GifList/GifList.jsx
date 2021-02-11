import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

export function GifList(){
    
    const dispatch = useDispatch();

    const store = useSelector(store => store.getSearch);

    React.useEffect(() =>{
        dispatch({type: 'FETCH_GIFS'});
    }, []);

    return(
        <pre>{JSON.stringify(store)}</pre>
    );
} 

