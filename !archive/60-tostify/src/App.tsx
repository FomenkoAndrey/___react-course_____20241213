import { toast, ToastContainer } from 'react-toastify'

const App = () => {
  const notify = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve('Success') : reject('Error')
      }, 3000)
    })

    toast.promise(
        promise,
        {
          pending: 'Loading...',
          success: 'Success!',
          error: 'Error'
        },
        {
          position: 'top-right', autoClose: 3000
        }
    )
  }


  return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer/>
      </div>
  )
}

export default App
