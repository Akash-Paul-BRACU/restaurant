import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input, Col} from "reactstrap"
export class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            telNum:"",
            email:"",
            agree: true,
            message: "",
            contactType:"Tel."
        }
    }

    handleInputChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        document.title="Contact";
        return (
            <div>
                <div className="container">
                    <div className="row row-content" style={{paddingRight:"30px", textAlign:"left"}}>
                        <div className="col-12">
                        <h1>I am Contact</h1>
                        </div>
                        <div className="col-12 col-md-7" >
                            <Form onSubmit={(event)=> this.handleSubmit(event)}>
                                <FormGroup >
                                    <label htmlFor="firstName" md={2}>First Name:</label>
                                    <Col md={12}>
                                    <input type="text" name="firstName" 
                                    placeholder="Enter Your First Name" 
                                    value={this.state.firstName} 
                                    onChange={(event) => this.handleInputChange(event)}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="lastName" md={2}>Last Name:</label>
                                    <Col md={10}>
                                    <input type="text" name="lastName" 
                                    placeholder="Enter Your Last Name"
                                     value={this.state.lastName}
                                     onChange={(event) => this.handleInputChange(event)}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="telNum" md={2}>TelNum:</label>
                                    <Col md={10}>
                                    <input type="text" name="telNum" 
                                    placeholder="Enter Your TelNum" 
                                    value={this.state.telNum}
                                    onChange={(event) => this.handleInputChange(event)}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="email" md={2}>Email:</label>
                                    <Col md={10}>
                                    <input type="text" name="email" 
                                    placeholder="Enter Your Email" 
                                    value={this.state.email}
                                    onChange={(event) => this.handleInputChange(event)}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                   <Col md={{size: 8}}>
                                       <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="agree"
                                                 checked={this.state.agree} 
                                                 onChange={(event) => this.handleInputChange(event)}/> 
                                                 <strong>We may contact with you</strong>
                                            </Label>
                                       </FormGroup>
                                   </Col>
                                    <Col md={{size: 5}}>
                                    <Input type="select" name="contactType"  
                                    value={this.state.contactType}
                                    onChange={(event) => this.handleInputChange(event)}>
                                        <option >Tel.</option>
                                        <option >Email</option>
                                    </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="message" > <strong>Your FeedBack</strong></Label>
                                    <Col md={10}>
                                        <Input type="textarea" name="message" 
                                        value={this.state.message}
                                        onChange={(event) => this.handleInputChange(event)}
                                         row={12}></Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={{size:18, offset:2}}>
                                        <Button type="submit" color="primary"> 
                                        Send Feedback</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
