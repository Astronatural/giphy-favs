
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';




function GifDisplayItem({ gif, gifId}) {

    let dispatch = useDispatch();
    const searchedGifs = useSelector(store => store.getSearch);


    const favoriteGif = () => {
        //const newFav = gif //searchedGifs.filter((gif) => gif.id === gifId);
        console.log(`Favoriting Gif with id of`, gif.id);
        axios.post(`/api/favorite`, { gif: gif.images.downsized_medium.url, title: gif.title })
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

    return (
        <div>
            <img src={gif.images.downsized_medium.url} />
            <br />
            <button onClick={() => {
                favoriteGif()
            }}>Favorite</button>
        </div>
    )

}

export default GifDisplayItem;