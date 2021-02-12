import GifDisplayItem from './GifDisplayItem';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function GifDisplay() {

    const dispatch = useDispatch();

    const getFavs = () => {
        console.log('Sending GET request..');
        axios.get(`/api/favorite`)
            .then((response) => {
                console.log(response);
                dispatch({
                    type: 'SET_FAVS',
                    payload: response
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getFavs();
    }, []);

    const searchedGifs = useSelector(store => store.getSearch);

    return (
        <div>
            <SearchForm />
            {searchedGifs.map(gif =>
                (<GifDisplayItem key={gif.id} gif={gif} gifId={gif.id}/>)
            )}
        </div>
    )

}

export default GifDisplay;