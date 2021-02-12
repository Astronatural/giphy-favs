import { useSelector } from 'react-redux';
import GifDisplayItem from './GifDisplayItem';


function GifDisplay() {

    const searchedGifs = useSelector(store => store.getSearch);

    return (
        <div>
            {searchedGifs.map(gif =>
                (<GifDisplayItem key={gif.id} gif={gif} gifId={gif.id}/>)
            )}
        </div>
    )

}

export default GifDisplay;