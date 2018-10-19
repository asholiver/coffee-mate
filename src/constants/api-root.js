const API_ROOT =
    process.env.NODE_ENV === "production"
        ? "https://coffee-mate-server.herokuapp.com/"
        : /*: "http://localhost:5000/";*/
          "https://coffee-mate-server.herokuapp.com/";

export default API_ROOT;
