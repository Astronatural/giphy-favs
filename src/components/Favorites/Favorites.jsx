import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import FavDisplayItem from './FavDisplayItem';
import axios from 'axios';

// change searchedGifs to favGifs

function Favorites() {

    const getFavs = () => {
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
        getFavs;
    });

    const favGifs = useSelector(store => store.favSearch);
    console.log(favGifs);


    

    return (
        <div>
            {favGifs.data.map(gif =>
                (<FavDisplayItem key={gif.id} gif={gif} />)
            )}
        </div>
    )

}

export default Favorites;