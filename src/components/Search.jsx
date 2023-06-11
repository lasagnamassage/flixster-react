function Search(props) {

    function handleOnClick(event) {
        event.preventDefault();
        props.handleSearch();
    }

    return (
        <form style={{ marginTop: '30px', textAlign: 'center'}}>
            <input 
                defaultValue={props.searchValue}
                onChange={props.handleSearchChange}
                type="search" 
                style={{ padding: '10px'}} />
            <button 
                type="submit" 
                onClick={handleOnClick}
                style={{ padding: '10px', fontWeight: 'bold'}}>
                    Search
                </button>
        </form>
    )
}
  
  export default Search
  