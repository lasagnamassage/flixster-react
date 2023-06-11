function LoadMore(props) {
    return (
        <button 
            style={{ 
                padding: '10px', 
                fontSize: '20px', 
                background: 'skyblue',
                borderColor: "gray",
                borderRadius: '10px',
                color: 'white',
                marginLeft: '50%',
                transform: 'translateX(-50%)',
                marginTop: '20px',
                marginBottom: '20px'
            }}
            onClick={props.handleOnClick}>
                <b>Load More...</b>
        </button>
    )
}
  
  export default LoadMore
  