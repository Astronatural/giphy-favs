import { useSelector } from 'react-redux';


function GifDisplay() {

    const searchedGifs = useSelector(store => store.getSearch);

    return (
        <div>
            {searchedGifs.map(gif =>
                (<div key={gif.url}><img src={gif.url}/></div>)
            )}
        </div>
    )

}

export default GifDisplay;