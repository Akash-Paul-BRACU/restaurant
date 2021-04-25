import React, { Component } from 'react'
import {Form, Button, Input} from "reactstrap"
import {connect} from "react-redux"
class CommentForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            author: "",
            rating:"",
            comment:""
        }
    }
    
    handleInputChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        //console.log(this.state)

        this.props.dispatch({
            type: "ADD_COMMENT",
            payload : {
            dishId: this.props.dishId,
            author: this.state.author,
            rating:this.state.rating,
            comment:this.state.comment
            }
        })
        this.setState({
            author: "",
            rating:"",
            comment:""
        })
        event.preventDefault()
    }
    
    render() {
        //console.log(this.props);
        return (
            <div>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <Input type="text" 
                    name="author" 
                    value={this.state.author} 
                    placeholder="Your Name"
                    onChange={(event) => this.handleInputChange(event)} 
                    required>  
                    <br/>
                    </Input>
                    <Input 
                    type="select"
                    name="rating"
                    onChange={(event) => this.handleInputChange(event)} 
                    value={this.state.rating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br/>

                    <Input type="textarea"
                    name="comment"
                    value={this.state.comment}
                    placeholder="Your Comment"
                    onChange={(event) => this.handleInputChange(event)} 
                    required></Input>
                    <br/>
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

export default connect()(CommentForm)