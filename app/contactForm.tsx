"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full bg-black text-[#BFA181] placeholder:text-gray-600 px-5 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none transition-colors duration-200 focus:border-[#178582] focus:ring-1 focus:ring-[#178582]";

export const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || status === "sending") return;

    setStatus("sending");

    emailjs
      .sendForm("service_6iog6hr", "template_kv3kxlq", form.current, {
        publicKey: "tiUQnIokrPPMnlP_O",
      })
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error?.text);
          setStatus("error");
        }
      );
  };

  // clear the status message as soon as the user starts typing again
  const handleChange = () => {
    if (status === "success" || status === "error") setStatus("idle");
  };

  return (
    <div className="bg-[#030B14] rounded-lg p-4 sm:p-10 shadow-xl border border-white/5">
      <h2 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&rsquo;s work together!
      </h2>
      <p className="text-[#BFA181] mt-3 lg:text-base text-xs md:text-sm">
        Connections made in the workplace, which are helpful for career and business growth.
      </p>

      {/* input fields */}
      <form
        ref={form}
        onSubmit={sendEmail}
        onChange={handleChange}
        className="mt-8 block w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First name"
            aria-label="First name"
            autoComplete="given-name"
            required
            name="first_name"
            className={`flex-1 ${fieldClass}`}
          />
          <input
            type="text"
            placeholder="Last name"
            aria-label="Last name"
            autoComplete="family-name"
            required
            name="last_name"
            className={`flex-1 ${fieldClass}`}
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            autoComplete="email"
            required
            name="email"
            className={`flex-1 ${fieldClass}`}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            aria-label="Phone number"
            autoComplete="tel"
            required
            name="phone_no"
            className={`flex-1 ${fieldClass}`}
          />
        </div>

        <div>
          <select
            name="selector"
            aria-label="Service you are interested in"
            defaultValue=""
            required
            className={`mt-5 ${fieldClass}`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullStack">Full Stack Development</option>
            <option value="ai_agentic">AI / Agentic AI Development</option>
            <option value="digital_marketing">Digital Marketing</option>
          </select>
        </div>

        <textarea
          name="message"
          aria-label="Your message"
          required
          className={`mt-5 ${fieldClass}`}
          rows={7}
          placeholder="Message"
        ></textarea>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-8 py-3.5 bg-gradient-to-r from-[#178582] to-[#043533] text-white font-bold rounded-full shadow-md shadow-black/30 transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* inline status message (replaces browser alert popups) */}
          <p role="status" aria-live="polite" className="text-sm font-medium">
            {status === "success" && (
              <span className="text-[#3ec9c4]">
                Thank you! Your message has been sent successfully.
              </span>
            )}
            {status === "error" && (
              <span className="text-[#DA7B93]">
                Something went wrong. Please try again.
              </span>
            )}
          </p>
        </div>
      </form>
    </div>
  );
};
