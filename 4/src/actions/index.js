import axios from 'axios';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=bumbuKhan';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts() {
  const request = axios.get(`${API_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(data) {
  const request = axios.post(`${API_URL}/posts${API_KEY}`, data);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${API_URL}/posts/${id}${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${API_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  }
}
