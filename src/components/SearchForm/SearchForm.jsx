import { useState } from 'react';
import { useDispatch } from 'react-redux';


function SearchForm () {
    
    const [searchTerm, setSearchQ] = useState(''); 
    const dispatch = useDispatch();
    const handleSubmit = event => {
        event.preventDefault();
        console.log(`searching...`, { searchTerm: searchTerm });
        dispatch({
            type: 'POST_SEARCH',
            payload: { searchTerm: searchTerm }
        });
        
    };

return (
    <form onSubmit={handleSubmit} className="searcher">
        <input
            required
            placeholder="what type of gif do you want to see?"
            value={searchTerm}
            onChange={(event) => setSearchQ(event.target.value)}
        />
        <button type="submit">
            Search
        </button>
        </form>
)

}

export default SearchForm;