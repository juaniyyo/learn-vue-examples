import axios from "axios";
import store from "../store";

async function apiGet(url) {
  const config = {
    method: "get",
    mode: "cors",
    headers: {
      Authorization: "Bearer " + store.state.wordpress.token,
      "Content-Type": "application/json"
    }
  };
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function apiPost(url, payload) {
  const config = {
    method: "get",
    mode: "cors",
    headers: {
      Authorization: "Bearer " + store.state.wordpress.token,
      "Content-Type": "application/json"
    }
  };
  try {
    const response = await axios.post(url, payload, config);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const api = {};

api.getUsers = () => {
  return apiGet("/wp/v2/users");
};

api.getMarkers = () => {
  return apiGet("/markers/v1/post");
};

api.getUser = id => {
  return apiGet(`/wp/v2/users/${id}?context=edit`);
};

api.getPosts = () => {
  return apiGet("/wp/v2/posts");
};

api.getPost = id => {
  return apiGet(`/wp/v2/posts/${id}`);
};

api.getMedia = id => {
  return apiGet(`/wp/v2/media/${id}`);
};

api.updateUser = (id, payload) => {
  return apiPost(`/wp/v2/users/${id}`, payload);
};

// api.putSumRestaurantLikes = payload => {
//   const restaurantId = payload.id;
//   const url = `restaurants/${restaurantId}`;
//   return apiPut(url, payload.data);
// };

// api.getRestaurantsByCategory = ({ category }) => {
//   return apiGet(`restaurants?category=${category}`);
// };

// api.getOneRestaurant = ({ slug }) => {
//   return apiGet(`restaurants?slug=${slug}`);
// };

export default api;
