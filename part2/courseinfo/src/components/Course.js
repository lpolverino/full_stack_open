const Header = (props) =>{
    return(
    <>
    <h1>{props.course}</h1>
    </>)
  }
  
  const Part = (props) =>{
    return(
      <>
        <p>{props.part} {props.exercises}</p>
      </>
    )
  }
  
  const Content = ({parts})=>{
    return(
      <>
      {parts.map(coursePart => <Part key={coursePart.id} part={coursePart.name} exercises={coursePart.exercises}></Part>)}
      </>
    )
  }
  
  const Total = ({parts})=>{
    console.log(parts);
    return(
      <>
        <p>Number of exercises {parts.reduce((acum, current)=> acum + current.exercises,0)}</p>
      </>
    )
  }
  
  const Course = ({course}) =>{
    return (
      <div>
        <Header course={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total parts={course.parts}></Total>
      </div>
    )
  }

  export default Course