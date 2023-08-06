const Notification = ({message, error}) =>{
    if (message === null) {
        return null
      }
    console.log(error?'error':'notification')
      return (
        <div className={error?'error':'notification'}>
          {message}
        </div>
      )
}

export default Notification