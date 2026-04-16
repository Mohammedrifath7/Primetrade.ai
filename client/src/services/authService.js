const BASE_URL = "http://localhost:5000/api";

// 🔥 Signup
export const signup = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

// 🔥 Login
export const login = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};