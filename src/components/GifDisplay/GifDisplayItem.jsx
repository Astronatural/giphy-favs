import { useDispatch, useSelector } from 'react-redux';



function GifDisplayItem({ gif, gifId}) {

    let dispatch = useDispatch();
    const searchedGifs = useSelector(store => store.getSearch);


    const favoriteGif = () => {
        const newFav = gif //searchedGifs.filter((gif) => gif.id === gifId);
        console.log(`Favoriting Gif with id of`, gif.id);
        dispatch ({
            type: 'SET_FAVS',
            payload: newFav
        })         
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