
const Person = ({name, number, destroyPerson}) =>{
    return <>
    <p>{name} {number}</p>
    <button onClick={destroyPerson}>Delete</button>
    </>
  }
  
  
  const PersonShower = ({persons, personFilter, destroyPersonHandler}) =>{
    return <>
    {persons.filter((person) =>{
      return person.name.toLowerCase().includes(personFilter.toLowerCase())
    })
    .map((person)=><Person key={person.name} name={person.name} number={person.number} destroyPerson={() => destroyPersonHandler(person.id)}></Person>)}
    </>
  }

export default PersonShower