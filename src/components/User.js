import React from "react";
import { Link } from "react-router-dom";

const User = ({ el }) => {
  return (
    <div className="container" style={{ width: "18rem" }}>
      <Link to={`/user/${el.id}`}>
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
                <h3 className="name">{el.name}</h3>
                <h4 className="title">{el.username}</h4>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default User;
