
const Filter = ({countryFilter, onChangeHandler}) => {
  
    return <>
            find countries <input value={countryFilter} onChange={onChangeHandler}></input> 
          </>
  }

  export default Filter