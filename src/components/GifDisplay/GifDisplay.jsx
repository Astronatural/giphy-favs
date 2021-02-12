import { useSelector } from 'react-redux';
import GifDisplayItem from './GifDisplayItem';
import SearchForm from '../SearchForm/SearchForm';


function GifDisplay() {

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