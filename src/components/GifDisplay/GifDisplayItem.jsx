


function GifDisplayItem({gif}) {

    const favoriteGif = () => {
        console.log('Favoriting Gif..');
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