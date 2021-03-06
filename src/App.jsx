import "./index.css";
import React, { useState } from "react";
import { database } from "./firebase";
import { ref, push, child, update } from "firebase/database";

const Forms = () => {
  const [formsData, setformsData] = useState({
    firstName: "",
    email: "",
    message: "",
    subscribe: false,
  });
  //object name are html name attributes

  const changeData = (e) => {
    const { name, value, type, checked } = e.target;
    //targeting the things which required
    setformsData((lastValue) => {
      return {
        ...lastValue,
        [name]: type === "checkbox" ? checked : value,
        //checking name = value
        //if type is checkbox means it will check the checked thing
        //...lastvalue for fullValue getting/prevValue
      };
    });
  };

  const triggerForm = (e) => {
    e.preventDefault();
    console.log(formsData);
    //firebase database
    //push takes 2 parameter child and request a posts
    //child take 1 parameter as ref()
    //ref take 1 parameter as database which i passed from firebase.js
    //.key to create a keyvalue pair
    const newPostKey = push(child(ref(database), "posts")).key; //this line is important for random submits
    const updates = {};
    // "/" for adding collections in it
    updates["/" + newPostKey] = formsData;
    return update(ref(database), updates);
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

            {/*-------------submit btn-------------------*/}
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
