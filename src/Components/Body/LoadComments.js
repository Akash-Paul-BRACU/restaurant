import React from 'react'
import dateFormat from "dateformat"
import Loading from './Loading'
const LoadComments = (props) => {
    if(props.commentsIsLoading){
        return <Loading />
    }
    return (
        props.comments.map(comment => {
        //console.log(props);
            return (
                <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <h5>{comment.comment}</h5>
                    <h5>{comment.rating}</h5>
                    <h5>{comment.date}</h5>
                    <p>{dateFormat(comment.date, "dddd, mmmm ds, yyyy, h:MM:ss TT")}</p>
                </div>
            )
        })
    )
}

export default LoadComments
