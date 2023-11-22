// import InputErrormessage from "../auth/InputErrorMessage";

// export default function InputForm({
//   type = "text",
//   placeholder,
//   name,
//   value,
//   onChange,
//   errorInput,
// }) {
//   return (
//     <>
//       <input
//         type={type}
//         placeholder={placeholder}
//         name={name}
//         className="border rounded-md border-gray-400 py-1 px-2 w-1/3 text-red-600"
//         value={input.firstName}
//         onChange={handleChangeInput}
//       />
//       {error && <InputErrormessage message={error} />}
//     </>
//   );
// }

import InputErrorMessage from "../auth/InputErrorMessage";

export default function InputForm({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  errorInput,
}) {
  // console.log(errorInput);
  return (
    <div className="mt-5 gap-5   py-1 px-2 w-2/3">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-md border-gray-400 py-1 px-2 w-1/3 text-red-600"
        placeholder={placeholder}
      />

      {errorInput && <InputErrorMessage message={errorInput} />}
    </div>
  );
}
