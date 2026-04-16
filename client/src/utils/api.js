const BASE_URL = "http://localhost:5000/api";

// 🔥 Common API request function
export const apiRequest = async (endpoint, method = "GET", body = null, token = null) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    const data = await res.json();
    return { ok: res.ok, data };

  } catch (err) {
    console.error("API Error:", err);
    return { ok: false, data: { message: "Something went wrong" } };
  }
};