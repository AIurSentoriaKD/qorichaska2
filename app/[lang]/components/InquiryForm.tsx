"use client";
import React, { FormEvent } from "react";

function InquiryForm() {
  async function sendDataReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <form
      onSubmit={sendDataReservation}
      className="flex sm:gap-4 gap-8 sm:flex-row flex-col w-full"
    >
      <input
        type="email"
        name="mail"
        id="mail"
        placeholder="example@gmail.com"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <button
        className="bg-primary-blue  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Inquiry Now
      </button>
    </form>
  );
}

export default InquiryForm;
