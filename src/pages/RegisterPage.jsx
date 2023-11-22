import { useState } from "react";

import { useAuth } from "../hooks/use-auth";
// import { toast } from "react-toastify";
import Joi from "joi";
import InputForm from "../components/InputForm";
import axios from "../config/axios";
// import { Link } from "react-router-dom";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.alternatives([Joi.string().email({ tlds: false })])
    .required()
    .strip(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const vailidateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterPage() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});
  const { register } = useAuth();

  const handleChangeinput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSumbitForm = async (e) => {
    e.preventDefault();
    console.log("clickk");

    const validationError = vailidateRegister(input);
    console.log(validationError);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    const inputNoConfirm = { ...input };
    delete inputNoConfirm.confirmPassword;
    console.log("ertyuio");

    // await axios.post("/auth/register", inputNoConfirm);
    register(inputNoConfirm).catch((err) => {
      toast.error(err.response.data.message);
    });
  };

  return (
    <form onSubmit={handleSumbitForm}>
      <div className=" mt-5 gap-5 py-1 px-2  ">
        <div className="">
          <InputForm
            placeholder="Firstname"
            name="firstName"
            value={input.firstName}
            onChange={handleChangeinput}
            error={error.firstName}
          />
        </div>
        <div>
          <InputForm
            placeholder="Lastname"
            name="lastName"
            value={input.lastName}
            onChange={handleChangeinput}
            error={error.lastName}
          />
        </div>
        <div className="mt-5">
          <InputForm
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChangeinput}
            error={error.email}
          />
        </div>
        <div className="mt-5">
          <InputForm
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeinput}
            error={error.password}
          />
        </div>
        <div className="mt-5">
          <InputForm
            placeholder="ConfirmPassword"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeinput}
            error={error.confirmPassword}
          />
        </div>
        {/* <div className="mt-5">
        <input type="checkbox" className="border border-gray-400" />
        <span>
          I accept the{" "}
          <a href="#" className=" font-semibold">
            Terms of Use
          </a>{" "}
          &{" "}
          <a href="#" className="text-purple-500 font-semibold">
            Privacy Policy
          </a>
        </span>
      </div> */}
        <div className="mt-5">
          <button
            type="submit"
            className=" rounded-md bg-secondaryColor py-3 text-center text-white w-2/3"
          >
            Register Now
          </button>
        </div>
      </div>
    </form>
  );
}
