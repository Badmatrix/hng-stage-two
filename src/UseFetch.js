import { useState, useEffect } from 'react'
const UseFecth = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzE2ZDNiYzgxZmM2MGJmOTMxMzZiZDdiNWFiNDljMyIsInN1YiI6IjY1MDA0NmE4NmEyMjI3MDBmZDIwMzdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.udEdw6quGQDirCxpU770PmMzdpt570nJ7v3Oxj1QT-I'
      }
    }


    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          console.log('error 1')
          throw Error('could not fetch data')
        } return res.json()
      }).then(data => {
      // console.log(data)
        setData(data.results.slice(0,9))
        
      setIsLoading(false)
      setError(false)
    })
      .catch(err => {
        setIsLoading(false)
        setError(err.message)
        setData([])
        console.log('error 2')
      }
    )
  }, [url])
  return (
  {data,isLoading,error}
  )
}

export default UseFecth
