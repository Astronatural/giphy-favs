import { useSelector } from 'react-redux';


function FavDisplayItem({ gif }) {

    const favoriteGif = () => {
        console.log('Favoriting Gif..');
    }

    return (
        <div>
            <img src={gif.images.downsized_medium.url} />
            <br />
        </div>
    )

}

export default FavDisplayItem;