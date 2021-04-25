import React, { Component } from 'react'
import dishes from '../../Data/Dishes'
import DishDetail from './DishDetail'
import MenuItem from './MenuItem'
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from "reactstrap"
import comments from '../../Data/Comments'
import {connect} from "react-redux"

const mapStateToProps = state => {
    return {
        dishes: dishes,
        comments:comments
    }
} 
class Menu extends Component {
    state = {
        selectedDish:null,
        modalOpen: false 
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish : dish, 
            modalOpen: !this.state.modalOpen
        });
        
        
    }

    toggleModal =() => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        document.title="Menu";
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} dishSelect={() => this.onDishSelect(item)}/>
            );
        })

        let dishDetail = null;
        if(this.state.selectedDish  != null){
            const comments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id;
            })
            dishDetail = <DishDetail 
            dish={this.state.selectedDish}
            comments ={comments} />
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Menu);
