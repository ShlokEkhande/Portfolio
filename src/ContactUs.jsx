import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "aos/dist/aos.css"; // Import the AOS styles

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_60ryz9c", "template_r52jtjn", form.current, {
        publicKey: "rORCsjRDR3mrumyHY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <section id="contact" data-aos="fade-in">
        <div className="w-full max-w-4xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white opacity-80 text-4xl font-bold border-b-8 border-pink-600 inline-block">
              Contact
            </h1>
            <p className="text-white mt-2">
              Submit the form below or shoot me an email -
              shlokekhande48@gmail.com
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="mt-10 mx-auto">
            <div className="w-full max-w-2xl text-white flex flex-col mx-auto">
              <input
                type="text"
                placeholder="Name:"
                required
                name="from_name"
                className="w-full text-black border rounded-md p-2 bg-[#CCD6f6] "
              />
              <br />
              <input
                type="email"
                placeholder="Email:"
                required
                name="from_email"
                className="w-full text-black border rounded-md p-2 bg-[#CCD6f6] "
              />
              <br />
              <textarea
                placeholder="Message:"
                rows={5}
                name="message"
                required
                className="w-full text-black border rounded-md p-2 bg-[#CCD6f6] "
              ></textarea>
              <br />
              <input
                type="submit"
                value="Connect"
                className="border w-full sm:w-[7rem] px-4 py-2 text-center hover:bg-pink-600 transition-all duration-300 cursor-pointer rounded-md hover:scale-105 mx-auto"
              />
            </div>
          </form>
        </div>

        <div className="flex justify-center mt-16 gap-5">
          <a href="https://www.linkedin.com/in/shlok-ekhande/">
            <img
              src="src\assets\linkedin.png"
              alt="LinkedIn"
              width={40}
              className="hover:-mt-1.5 transition-all duration-200"
            />
          </a>
          <a href="https://www.instagram.com/iamshlok_01/">
            <img
              src="src\assets\ig.png"
              alt="Instagram"
              width={40}
              className="hover:-mt-1.5 transition-all duration-200"
            />
          </a>
          <a href="https://github.com/ShlokEkhande">
            <img
              src="src\assets\github.png"
              alt="GitHub"
              width={40}
              className="hover:-mt-1.5 transition-all duration-200"
            />
          </a>
        </div>
      </section>
    </div>
  );
};
