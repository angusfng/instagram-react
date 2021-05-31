class API {
  url: string;

  constructor() {
    this.url = "http://localhost:5000";
  }

  fetchJSON = async (endpoint: string, options = {}) => {
    const res = await fetch(this.url + endpoint, options);

    if (!res.ok) {
      const error = await res.json();
      throw error.message;
    }

    return await res.json();
  };

  get = (endpoint: string) => {
    console.log(`Token ${localStorage.getItem("token")}`);
    return this.fetchJSON(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
  };

  post = (endpoint: string, body = {}) => {
    return this.fetchJSON(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
}

export default new API();
