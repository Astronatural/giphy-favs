import { useState } from 'react';
import { useDispatch } from 'react-redux';


function SearchForm () {
    
    const [searchQ, setSearchQ] = useState(''); 
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(`searching...`, { searchQ });
        dispatch({
            type: 'POST_SEARCH',
            payload: { searchQ }
        });
    };

return (
    <form onSubmit={handleSubmit} className="searcher">
        <input
            required
            placeholder="what type of gif do you want to see?"
            value={searchQ}
            onChange={(event) => setSearchQ(event.target.value)}
        />
        <button type="submit">
            Search
        </button>
        </form>
)

}

export default SearchForm;