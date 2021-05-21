class API {
  url: string;

  constructor() {
    this.url = "http://localhost:5000";
  }

  fetchJSON = async (endpoint: string, options = {}) => {
    const res = await fetch(endpoint, options);

    if (!res.ok) {
      throw Error("Something went wrong");
    }

    return await res.json();
  };

  get = (endpoint: string) => {
    return this.fetchJSON(endpoint, {
      method: "GET",
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
