// import dishes from "../Data/Dishes"
import * as actionTypes from "./Action"
import axios from "axios"
import { baseUrl } from "./baseUrl"

export const addComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId : dishId,
        author: author,
        rating: rating,
        comment: comment
    }

    newComment.date = new Date().toISOString();

    axios.post(baseUrl + "comments", newComment)
    .then(response => response.data)
    .then(comment => dispatch(commentContact(comment)))
}

export const commentContact = (comment) =>( {
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = (comments) => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})


export const fetchComments = () => dispatch => {
   
        dispatch(commentLoading());

        

        axios.get(baseUrl + "comments")
        .then(res => res.data)
        .then(comments => dispatch(loadComments(comments)))
    
}

export const loadDishes = (dishes) => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const dishesFailed = (errMess) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMess
})


export const fetchDishes = () => dispatch => {
    // return dispatch => {
        dispatch(dishesLoading());

        // setTimeout(() => {
        //     dispatch(loadDishes(dishes));
        // }, 2000);

        axios.get(baseUrl + "dishes")
        .then(res => res.data)
        .then(dishes => dispatch(loadDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
    // }
}