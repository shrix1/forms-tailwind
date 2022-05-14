import "./index.css";
import React, { useState } from "react";

const Forms = () => {
  const [formsData, setformsData] = useState({
    firstName: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const changeData = (e) => {
    const { name, value, type, checked } = e.target;
    setformsData((lastValue) => {
      return {
        ...lastValue,
        [name]: type === "checkBox" ? checked : value,
      };
    });
  };

  const triggerForm = (e) => {
    e.preventDefault();
    console.log(formsData);
  };

  return (
    <>
      <section className="bg-sky-500 w-[100%] h-[100vh]">
        <main
          className="absolute top-2/4 left-2/4 rounded-lg -translate-x-2/4 
          -translate-y-2/4 w-[500px] border-[1px] h-[70vh] shadow-md shadow-white
           bg-[#ffffff] border-gray-900"
        >
          <form
            onSubmit={triggerForm}
            className="flex flex-col font-pop sasasas mb-0 space-y-7 items-center "
          >
            {/*----------firstName-----------*/}
            <div>
              <label
                htmlFor="textt"
                className="block text-[20px] font-[600] mt-9 text-gray-700"
              >
                Name
              </label>

              <input
                id="textt"
                type="text"
                name="firstName"
                placeholder="Name"
                onChange={changeData}
                className="border-[2.5px] mt-1 text-xl border-sky-500 
                rounded-md p-2 w-[400px] hover:border-gray-600 focus:outline-none"
                value={formsData.firstName}
                required
              />
            </div>

            {/*---------------- email-----------*/}
            <div>
              <label
                htmlFor="email"
                className="block text-[20px] font-[600] text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                onChange={changeData}
                value={formsData.email}
                required
                className=" border-[2.5px] mt-2 text-xl border-sky-500 rounded-md 
                p-2 w-[400px] hover:border-gray-600 "
              />
            </div>

            {/* ------------message----------------*/}
            <div>
              <label
                htmlFor="message"
                className="block text-[20px] font-[600] text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="message"
                onChange={changeData}
                className="border-2 mt-1 h-[160px] text-xl border-sky-500 
                rounded-md p-2 hover:border-gray-600 w-[400px]"
                maxLength="100"
                value={formsData.message}
                required
              />
            </div>

            {/*------ checkBox for subNewsletter------*/}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="subscribe"
                className="w-6 h-6"
                id="subscribe"
                onChange={changeData}
                checked={formsData.checking}
              />
              <label
                htmlFor="subscribe"
                className="ml-5 text-[18px] font-pop font-[600]"
              >
                Subscribe for Newsletter
              </label>
            </div>

            {/*-------------submit btn -------------------*/}
            <button
              className="text-xl w-[150px] 
              h-[50px] bg-sky-700 rounded text-white hover:border-sky-500 
              hover:border-2 hover:bg-white hover:text-sky-500"
            >
              Submit
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default Forms;
