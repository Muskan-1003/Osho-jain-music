import React, { useState } from "react";
import { FaMusic } from "react-icons/fa";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted email:", formData.email);

    setFormData({
      email: "",
    });
  };

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl font-bold text-inter">Newsletter</h1>
      <div className="flex flex-col justify-center items-center text-xl ">
        <p >Stay in the Melodic Loop!</p>
        <div className="flex">

        <p>
          Sign up for our newsletter and be the first to groove to every beat of
          Osho Jain's latest songs
        </p>
        <FaMusic className="mt-2"/>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center text-md mt-3"
      >
        <label>
          <input
            required
            type="text"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter Email id"
            className="w-[400px] px-4 py-2 rounded-md border"
          />
        </label>
        <button className="mt-3 bg-black hover:bg-gray-800 text-white rounded-lg w-40">
          Submit
        </button>
        <p className="text-xl mt-3">
          "Subscribe now for a harmonious journey through music updates and
          exclusive releases!"
        </p>
      </form>
    </div>
  );
};

export default Newsletter;
