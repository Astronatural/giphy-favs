import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function FavDisplayItem({ gif }) {

    const dispatch = useDispatch();

    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        console.log(`categoriziting Gif`, { gif });
        setCategory(e.target.value);
        dispatch({
            type: 'CAT_GIFS',
            payload: category
        })
    }
    return (
        <div>
            <img src={gif.images.downsized_medium.url} />
            <br />
            <form name="radioGroup" >
                <p>Select a tag to categorize your favorite gifs </p>
                <input name='category' type='radio' id='funny' value='funny' onChange={handleChange} ></input>
                <label for='funny'>Funny</label>
                <input name='category' type='radio' id='cohort' value='cohort' onChange={handleChange} ></input>
                <label for='cohort'>Cohort</label>
                <input name='category' type='radio' id='cartoon' value='cartoon' onChange={handleChange} ></input>
                <label for='cartoon'>Cartoon</label>
                <input name='category' type='radio' id='nsfw' value='nsfw' onChange={handleChange} ></input>
                <label for='nsfw'>NSFW</label>
                <input name='category' type='radio' id='Meme' value='Meme' onChange={handleChange} ></input>
                <label for='Meme'>Meme</label>
                {/* <input type='text' id='Custom' value={customCat} onChange={(e) => setGifCat(e.target.value)} ></input>
                <label for='custom'>Custom</label> */}
                {/* <button type='submit' >Submit</button> */}
            </form>
        </div>
    );
            
}

export default FavDisplayItem;