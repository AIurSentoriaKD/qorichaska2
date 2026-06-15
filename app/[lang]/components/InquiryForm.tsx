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
        className="w-full rounded border border-qori-outline-soft bg-white px-3 py-2 leading-tight text-qori-ink shadow-sm focus:outline-none focus:ring-2 focus:ring-qori-accent"
      />

      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        className="w-full rounded border border-qori-outline-soft bg-white px-3 py-2 leading-tight text-qori-ink shadow-sm focus:outline-none focus:ring-2 focus:ring-qori-accent"
      />

      <button
        className="rounded bg-qori-primary px-4 py-2 font-bold text-white hover:bg-[#84250e] focus:outline-none focus:ring-2 focus:ring-qori-accent"
        type="submit"
      >
        Inquiry Now
      </button>
    </form>
  );
}

export default InquiryForm;
