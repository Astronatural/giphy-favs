import { useSelector } from 'react-redux';
import FavDisplayItem from './FavDisplayItem';

// change searchedGifs to favGifs

function Favorites() {

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