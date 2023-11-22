import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import Joi from "joi";
import { toast } from "react-toastify";

const loginSchema = Joi.object({
  email: Joi.alternatives([
    Joi.string()
      .trim()
      .email({ tlds: { allow: ["com"] } })
      .pattern(/@(gmail|hotmail)\.com$/),
  ]),
  password: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9]{6,30}$/),
});

const vailidateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function LoginPage() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSumbitForm = (e) => {
    e.preventDefault();
    login(input).catch((err) => {
      toast.error(err.response.data.message);
    });
  };

  //   const { login } = useAuth();
  //   const [error, setError] = useState({});

  //   const handleChangeinput = (e) => {
  //     setInput({ ...input, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmitForm = async (e) => {
  //     e.preventDefault();
  //     console.log("clickk");

  //     const validationError = vailidateLogin(input);
  //     console.log(validationError);
  //     if (validationError) {
  //       return setError(validationError);
  //     }
  //     setError({});
  //     const inputNoConfirm = { ...input };
  //     delete inputNoConfirm.confirmPassword;
  //     console.log("ertyuio");

  //     await axios.post("/auth/login", inputNoConfirm);
  //     // register(inputNoConfirm).catch((err) => {
  //     //   toast.error(err.response.data.message);
  //     // });
  //   };

  return (
    <form onSubmit={handleSumbitForm}>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="border rounded-md border-gray-400 py-1 px-2 w-2/3 tex text-red-400"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>
      <div className="mt-5">
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="border rounded-md border-gray-400 py-1 px-2 w-2/3 text-red-400"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
      </div>
      {/* <div className="mt-5">
        <input
          type="password"
          placeholder="Confirm Password"
          className="border rounded-md border-gray-400 py-1 px-2 w-2/3"
        />
      </div> */}

      <div className="mt-5">
        <button
          type="submit"
          className=" rounded-md bg-secondaryColor py-3 text-center text-white w-2/3"
        >
          Login
        </button>
        {/* <Link to="/register">Create new account?</Link> */}
      </div>
    </form>
  );
}
