import React, { Component } from 'react'
import { Button, FormGroup, Label, Col } from "reactstrap"
import { Form, Control, Errors, actions } from "react-redux-form"
import {connect} from "react-redux"
import axios from 'axios'
import { baseUrl } from '../../Redux/baseUrl'
import { Alert } from 'reactstrap'


const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset("feedback"))
        }
    }
}

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
export class Contact extends Component {
    state ={
        alertShow: false,
        alertText: null, 
        alertType: null
    }

    handleInputChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = values => {
        axios.post(baseUrl + "feedback" , values )
        .then(response => response.status)
        .then(status => {
            if(status === 201){
                this.setState({
                    alertShow:true,
                    alertText: "Submitted Successfully",
                    alertType: "success"
                });
                setTimeout(() => {
                    this.setState({
                        alertShow:false
                    })
                },2000)
            }
        })
        
        .catch(error => {
            this.setState({
                alertShow: true,
                alertText: error.message,
                alertType: "danger"
            })
            setTimeout(() => {
                this.setState({
                    alertShow:false
                })
            },2000)
        })
        this.props.resetFeedbackForm();
    }
    render() {
        document.title = "Contact";
        return (
            <div>
                <div className="container">
                    <div className="row row-content" style={{ paddingRight: "30px", textAlign: "left" }}>
                        
                        <div className="col-12">
                            <h1>Send your Feedback</h1>
                            <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                        </div>
                        <div className="col-12 col-md-7" >
                            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                                <FormGroup >
                                    <label htmlFor="firstName" md={2}>First Name:</label>
                                    <Col md={12}>
                                        <Control.text
                                            model=".firstname"
                                            name="firstName"
                                            placeholder="Enter Your First Name"
                                            className="form-control"
                                            validators={{ required }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        message={
                                            {
                                                required: "Required"
                                            }
                                        } />
                                    </Col>

                                    
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="lastName" md={2}>Last Name:</label>
                                    <Col md={10}>
                                        <Control.text
                                            model=".lastname"
                                            name="lastName"
                                            placeholder="Enter Your Last Name"
                                            className="form-control"
                                            validators={{ required }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        message={
                                            {
                                                required: "Required"
                                            }
                                        } />

                                    </Col>

                                    
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="telNum" md={2}>TelNum:</label>
                                    <Col md={10}>
                                        <Control.text model=".telnum"
                                            name="telNum"
                                            placeholder="Enter Your TelNum"
                                            className="form-control"
                                            validators={{ required, isNumber }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        message={
                                            {
                                                required: "Required",
                                                isNumber: "Invalid Number"
                                            }
                                        } />

                                    </Col>

                                    
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="email" md={2}>Email:</label>
                                    <Col md={10}>
                                        <Control.text
                                            model=".email"
                                            name="email"
                                            placeholder="Enter Your Email"
                                            className="form-control"
                                            validators={{ required, validEmail }}
                                        />

                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            message={
                                                {
                                                    required: "Required",
                                                    validEmail: "Invalid Email"
                                                }
                                            } />
                                    </Col>


                                </FormGroup>

                                <FormGroup row>
                                    <Col md={{ size: 8 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Control.checkbox
                                                    model=".agree"
                                                    name="agree"
                                                    className="form-check-input"
                                                />
                                                <strong>We may contact with you</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{ size: 5 }}>
                                        <Control.select
                                            model=".contactType"
                                            name="contactType"
                                            className="form-control"
                                        >
                                            <option >Tel.</option>
                                            <option >Email</option>
                                        </Control.select>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="message" > <strong>Your FeedBack</strong></Label>
                                    <Col md={10}>
                                        <Control.textarea
                                            model=".message"
                                            name="message"
                                            row={12}
                                            className="form-control"
                                            validators={{ required }}>

                                        </Control.textarea>
                                    </Col>

                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        message={
                                            {
                                                required: "Required"

                                            }
                                        } />
                                </FormGroup>

                                <FormGroup>
                                    <Col md={{ size: 18, offset: 2 }}>
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

export default connect (null, mapDispatchToProps)(Contact)
