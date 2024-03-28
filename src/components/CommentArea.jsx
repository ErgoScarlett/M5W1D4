import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

export const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/'; 
export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTU3ODljNDM3MDAwMTkzYzM2ZDAiLCJpYXQiOjE3MTA3OTA3ODMsImV4cCI6MTcxMjAwMDM4M30.BSJ3pGD8tNy9o8s_cuUqma6Key7oL4WCRpe_2KrPKbI';


const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true)
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        )
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setIsLoading(false)
          setIsError(false)          
        } else {
          console.log('error')
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.error(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
     <CommentList commentsToShow={comments} /> 
    </div>
  )
}

export default CommentArea