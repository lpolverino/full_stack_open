const PersonFormAdder = ({onSumbitHandler, name, onChangeNameHandler, number, onChangeNumberHandler }) =>{
    return <>
      <form onSubmit={onSumbitHandler}>
          <div>
            <PersonFormInput text = "name" value={name} onChangeHnadler={onChangeNameHandler}></PersonFormInput>
            <PersonFormInput text = "number" value={number} onChangeHnadler={onChangeNumberHandler}></PersonFormInput>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </>
  }

  const PersonFormInput = ({text,value, onChangeHnadler}) =>{
    return <>{text}: <input value={value} onChange={onChangeHnadler}></input>  </>
  }

  export default PersonFormAdder