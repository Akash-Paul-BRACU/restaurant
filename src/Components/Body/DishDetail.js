import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import { baseUrl } from '../../Redux/baseUrl';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments'
const DishDetail = (props) => {
    //console.log(props);
    return (
        <div>
            <Card style={{margin:"10px"}}>

                <CardImg width="100%" src={baseUrl + props.dish.image} />
                <CardBody style={{ textAlign: "left" }}>

                    <CardTitle>
                        {props.dish.name}

                    </CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <p>{props.dish.price}</p>
                    <hr/>
                    <LoadComments comments= {props.comments} commentsIsLoading={props.commentsIsLoading}/>
                       <CommentForm dishId={props.dish.id} addComment={props.addComment}/>
                    
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail
