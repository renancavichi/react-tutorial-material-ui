import {useState, useEffect} from 'react'
import useAuthStore from '../store/authStore'

const Initialization = () => {

  const [isLoading , setIsLoading] = useState(true)
  const login = useAuthStore(state => state.login)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            setIsLoading(false)
            return
        }
        const userJSON = localStorage.getItem('user')
        if(token && userJSON) {
            const user = JSON.parse(userJSON)
            login(token, user)
        }
        setIsLoading(false)
        // eslint-disable-next-line
    }, [])
    
  return (
    <>
        {isLoading && (<div style={{position: 'absolute', top: 0, left: 0, bottom: 0, right:0, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFF', zIndex: 9999}}><h1>Loading...</h1></div>)}
    </>
  )
}

export default Initialization