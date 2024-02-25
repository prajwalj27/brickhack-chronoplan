import { useState } from "react";

const App = () => {
  const [data, setdata] = useState({
    task: "",
    date: "",
  });
  const handleSubmit = () => {
    const payload = { ...data };
    console.log(payload);
  };

  return (
    <div className="w-full h-full p-5 rounded-full">
      <h1 className="font-bold text-2xl mb-5 text-center text-yellow-600">
        Welcome to Chronoplan!
      </h1>

      <input
        type="text"
        value={data.task}
        onChange={(e) =>
          setdata((prevState) => ({
            ...prevState,
            task: e.target.value,
          }))
        }
        placeholder="Enter your task..."
        className="p-2 border-solid border-2 border-sky-300 rounded-full w-[400px] focus:border-sky-700 outline-none"
      />
      <input
        type="date"
        value={data.date}
        onChange={(e) => {
          console.log(e.target.value);
          setdata((prevState) => ({
            ...prevState,
            date: e.target.value,
          }));
        }}
      />

      <button className="block" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default App;
