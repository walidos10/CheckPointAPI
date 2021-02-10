import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserById = ({ match }) => {
  const [state, setstate] = useState([]);
  const getuser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => setstate(res.data))
      .catch((error) => console.error(error));
    console.log(state);
  };
  useEffect(() => {
    getuser(state);
  }, [match]);
  console.log(state);
  console.log(match.params.id);

  return (
    <div className="container" style={{ width: "18rem" }}>
      <Link to="/">
        <div>
          <div>
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=856"
                />
              </div>
              <div className="team-content">
                <h3 className="name">{state.name}</h3>
                <h4 className="title">{state.username}</h4>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserById;
