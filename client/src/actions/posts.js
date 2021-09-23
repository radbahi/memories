import * as api from "../api"; //import * imports everything

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await api.fetchPost(id);

    dispatch({ type: "FETCH_POST", payload: { post: data } });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "END_LOADING" });
  }
};

export const getPosts = (page) => async (dispatch) => {
  //now starts accepting params from pagination
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchPosts(page);
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "END_LOADING" });
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  console.log(searchQuery);
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await api.fetchPostsBySearch(searchQuery);
    console.log(data);
    dispatch({ type: "FETCH_BY_SEARCH", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "END_LOADING" });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "END_LOADING" });
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
