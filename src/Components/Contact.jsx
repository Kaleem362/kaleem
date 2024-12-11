import React, { useState } from "react";
import "../styles/contact.css";
import linkedin from "../socialicons/link.png";
import instagram from "../socialicons/instagram.png";
import twitter from "../socialicons/twitter.png";
import github from "../icons/github.png";
import emailjs from "emailjs-com";
import whitegithub from "../whitethemeicons/githubwhitetheme.png";
import whitelinkedin from "../whitethemeicons/linkedinwhitetheme.png";
import whiteinstagram from "../whitethemeicons/instagramwhitetheme.png";
import whitetwitter from "../whitethemeicons/twitterwhitetheme.png";
import ResumeFile from "../assets/kaleemCV.pdf";

function Contact({ theme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Function to handle email submission using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "message_service5427", // Your EmailJS service ID
        "template_m844yl9", // Your EmailJS template ID
        formData,
        "TN_SsrQLJSJwg7m9V" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to Send Message, Please Try Again.");
        }
      );

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <>
      <div
        className={`Contact_us_container ${
          theme === "light" ? "bg-white" : "bg-black"
        }`}
      >
        <div className="first_sub_flex">
          <h1 className={theme === "light" ? "text-black" : "text-white"}>
            Let's Connect
          </h1>
          <h5 className={theme === "light" ? "text-black" : "text-white"}>
            Say Hello at{" "}
            <a
              href="mailto:gulkhan97115@gmail.com?Hello Kaleem !"
              className={`${theme === "light" ? "fw-bold text-black" : ""}`}
            >
              gulkhan97115@gmail.com
            </a>
          </h5>
          <h5 className={theme === "light" ? "text-black" : "text-white"}>
            for More info here is my{" "}
            <a
              href={ResumeFile}
              download="kaleemullah_resume.pdf"
              className={`${theme === "light" ? "fw-bold text-black" : ""}`}
            >
              Resume
            </a>
          </h5>
          <div
            className={`social_icons  ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            <div className="app_icon">
              <a href="https://github.com/Kaleem362">
                <img
                  src={`${theme === "light" ? whitegithub : github}`}
                  alt=""
                  className={`${
                    theme === "light" ? "social_icons_shadow" : ""
                  }`}
                />
              </a>
            </div>
            <div className="app_icon">
              <a href="https://www.linkedin.com/in/kaleem-ullah-a35664258">
                <img
                  src={`${theme === "light" ? whitelinkedin : linkedin}`}
                  alt=""
                  className={`${
                    theme === "light" ? "social_icons_shadow" : ""
                  }`}
                />
              </a>
            </div>
            <div className="app_icon">
              <a href="">
                <img
                  src={`${theme === "light" ? whiteinstagram : instagram}`}
                  alt=""
                  className={`${
                    theme === "light" ? "social_icons_shadow" : ""
                  }`}
                />
              </a>
            </div>
            <div className="app_icon">
              <a
                href="https://www.instagram.com/kaleem_khan97115/
            "
              >
                <img
                  src={`${theme === "light" ? whitetwitter : twitter}`}
                  alt=""
                  className={`${
                    theme === "light" ? "social_icons_shadow" : ""
                  }`}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="second_sub_flex">
          <form onSubmit={sendEmail}>
            <div className="inputs">
              <label
                htmlFor="Name"
                className={`${
                  theme === "light" ? "text-black fw-bold" : "text-white"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                name="name"
                className={` ${
                  theme === "light"
                    ? "inputwhitethemecolor border border-black"
                    : ""
                }`}
                required
              />
            </div>
            <div className="inputs">
              <label
                htmlFor="Email"
                className={`${
                  theme === "light" ? "text-black fw-bold" : "text-white"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email.."
                value={formData.email}
                onChange={handleChange}
                name="email"
                className={` ${
                  theme === "light"
                    ? "inputwhitethemecolor border border-black"
                    : ""
                }`}
                required
              />
            </div>
            <div className="inputs">
              <label
                htmlFor="Subjects"
                className={`${
                  theme === "light" ? "text-black fw-bold " : "text-white"
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="Concern.."
                value={formData.subject}
                onChange={handleChange}
                name="subject"
                className={` ${
                  theme === "light"
                    ? "inputwhitethemecolor border border-black"
                    : ""
                }`}
                required
              />
            </div>
            <div className="inputs">
              <label
                htmlFor="Message"
                className={`${
                  theme === "light" ? "text-black fw-bold" : "text-white"
                }`}
              >
                Message
              </label>
              <textarea
                type="text"
                placeholder="write a message..."
                value={formData.message}
                onChange={handleChange}
                name="message"
                className={` ${
                  theme === "light"
                    ? "inputwhitethemecolor border border-black"
                    : ""
                }`}
                required
              />
            </div>
            <div className="button_submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
