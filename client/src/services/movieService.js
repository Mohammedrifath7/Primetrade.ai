const BASE_URL = "http://localhost:5000/api/movies";

// 🔥 Get user movies
export const getMovies = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/getMovies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

// 🔥 Add movie
export const addMovie = async (movieData, token) => {
  try {
    const res = await fetch(`${BASE_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movieData),
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

// 🔥 Update movie
export const updateMovie = async (id, data, token) => {
  try {
    const res = await fetch(`${BASE_URL}/updateMovies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

// 🔥 Delete movie
export const deleteMovie = async (id, token) => {
  try {
    const res = await fetch(`${BASE_URL}/deleteMovie/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

// 🔥 Admin - get all movies
export const getAllMovies = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

// 🔥 Admin - get all users
export const getAllUsers = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};