import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import FavDisplayItem from './FavDisplayItem';
import axios from 'axios';

// change searchedGifs to favGifs

function Favorites() {

    const getFavs = () => {
        console.log('Sending GET request..');
    axios.get(`/api/favorite`)
        .then((response) => {
            console.log(response);
            dispatch({
                type: 'SET_FAVS',
                payload: response
            })
            const favGifs = useSelector(store => store.favSearch);
            console.log(favGifs);

            return (
                <div>
                    {favGifs.data.map(gif =>
                        (<FavDisplayItem key={gif.id} gif={gif} />)
                    )}
                </div>
            )
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }

    useEffect(() => {
        getFavs;
    }, []);

    

}

export default Favorites;