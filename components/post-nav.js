import React from "react";
import Router from "next/router";
import { useState } from "react";

const Default = () => {
  const [value, setValue] = useState(1);

  const onHandleInputChange = (e) => {
    const value = +e.target.value;
    if (!e.target.value || (value >= 1 && value <= 100)) {
      setValue(e.target.value);
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/posts/${value}`);
  };
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-6 col-md-4 text-center">
        <form className="form" onSubmit={onHandleSubmit}>
          <div>
            <label htmlFor="basic-url">Please enter page id.</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">ID</span>
              </div>
              <input
                id="basic-url"
                type="text"
                className="form-control"
                placeholder="Page id"
                type="number"
                value={value}
                onChange={onHandleInputChange}
              />
            </div>
          </div>

          <button
            className="btn btn-lg btn-primary"
            disabled={!value}
            type="submit"
          >
            Go to post № {value}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Default;
