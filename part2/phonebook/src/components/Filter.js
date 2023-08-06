
const Filter = ({personFilter, onChangeHandler}) => {
  
    return <>
            filter shown with <input value={personFilter} onChange={onChangeHandler}></input> 
          </>
  }

  export default Filter