import { useEffect, useState } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonFormAdder from './components/PersonFormAdder'
import PersonShower from './components/PersonShower'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')
  const [operationMessage, setOperationMessage] = useState(null)
  const [error, setError] = useState(false)

  useEffect(()=>{
    console.log('effect');
    personService
    .getAll()
    .then(initialPersons => {
        console.log('promised fulfilled');
        setPersons(initialPersons)
      })
    .catch(error => {
      setError(true)
      createMessage("cannot load the persons of the phonebook")
    })
  }, []);
  console.log('render', persons.length, 'persons');

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {
      name:newName,
      number:newNumber
    }  
     persons.find((person) => person.name === personObject.name)?
      changeNumber(personObject):
      personService
       .create(personObject)
       .then(newPerson => {
         console.log(newPerson)
         setPersons([...persons, newPerson])
         createMessage(`Added ${newPerson.name}`)
      })
        .catch(error => {
          setError(true)
          createMessage(`cannot added ${newName}`)
        })
  }
  const createMessage = (aName) =>{
    setOperationMessage(aName)
         setTimeout(()=>{
          setOperationMessage(null)
         }, 5000)
  }

  const changeNumber = (personToChange) =>{
    if (window.confirm(`${personToChange.name} already exisst in the phonebook, do you wanna replace the number?`)){
      const changedPerson = {...personToChange, number: newNumber}
      const id = persons.find(person => person.name === personToChange.name).id
      console.log(personToChange);
      personService
        .updateNumber(id, changedPerson)
        .then(updatedPerson => {
          console.log(updatedPerson)
          setPersons(persons.map(person => person.id !== id? person : updatedPerson))
        })
        .catch(error => {
          setError(true)
          createMessage(` cannot update ${personToChange.name}`)
        })
        createMessage(`changed number of ${personToChange.name}`)
    }
  }
  const handleNameChange = (event) =>{
    console.log(event.target.value);
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) =>{
    console.log(event.target.value);
    setPersonFilter(event.target.value)
  }
  const deletePerson =(id)=>{
    const personToDelete = persons.find(person => person.id === id)
    console.log(`you wanna delete ${personToDelete}?`)
    window.confirm(`you wanna delete ${personToDelete.name}?`) &&
      personService
        .deletePerson(id)
        .then(deletedPerson =>{
          console.log(`eliminated ${deletedPerson}`);
          setPersons(persons.filter(person => person.id !== id))
        })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message ={operationMessage} error={error}></Notification>
      <Filter value={personFilter} onChangeHandler={handleFilterChange}> </Filter>
      <h2>Add a new</h2>
      <PersonFormAdder onSumbitHandler={addPerson} name={newName} onChangeNameHandler = {handleNameChange} number={newNumber} onChangeNumberHandler={handleNumberChange}></PersonFormAdder>
      <h2>Numbers</h2>
      <PersonShower persons={persons} personFilter={personFilter} destroyPersonHandler={deletePerson}></PersonShower>
    </div>
  )
}

export default App