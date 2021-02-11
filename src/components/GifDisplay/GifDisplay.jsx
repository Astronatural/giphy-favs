import { useSelector } from 'react-redux';


function GifDisplay() {

    const searchedGifs = useSelector(store => store.getSearch);
    console.log('Gifs', searchedGifs);

    return (
        <div>
            {searchedGifs.map(gif =>
                (<div key={gif.url}><img src={gif.url}/></div>)
            )}
        </div>
    )

}

export default GifDisplay;