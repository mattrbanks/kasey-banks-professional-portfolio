import React from "react";
import { Helmet } from "react-helmet";
import Recaptcha from "react-recaptcha";
import contactMeBitmoji from "../images/contactmebitmoji.png";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

const ContactForm = () => {
  const [confirm, setConfirm] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [isVerified, setIsVerified] = React.useState(false);

  const contactInfo = {
    name,
    email,
    message,
    phone,
    subject,
  };

  function handleSubmit(event) {
    if (isVerified) {
      fetch("/", {
        method: "POST",
        body: encode({ "form-name": "contact", ...contactInfo }),
      })
        .then(() => setConfirm(true))
        .catch((error) => alert(error));

      event.preventDefault();
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setSubject("");
    } else {
      event.preventDefault();
      alert("Please verify that you are a human!");
    }
  }

  function recaptchaLoaded() {
    console.log("recaptcha successfully loaded");
  }

  function verifyCallback(response) {
    if (response) {
      setIsVerified(true);
    } else {
      console.log("not verified!!!");
    }
  }

  return (
    <React.Fragment>
      <Helmet>
        <script
          src={`https://www.google.com/recaptcha/api.js?r=${Math.random()}`}
          async
          defer
        ></script>
      </Helmet>

      <div className="block mx-auto w-3/4 my-6">
        <div className="lg:flex lg:justify-center">
          <div>
            <img src={contactMeBitmoji} />
          </div>
          <form
            className="w-full max-w-lg"
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-4/5 md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="name"
                  type="text"
                  placeholder="full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="w-4/5 md:w-1/2 px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="subject"
                  type="text"
                  placeholder="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                ></input>
              </div>
              <div className="w-4/5 md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="phone"
                  type="text"
                  placeholder="(xxx) xxx-xxxx"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
              <div className="w-4/5 md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="email"
                  type="email"
                  placeholder="youraddress@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-4/5 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  name="message"
                  placeholder="type your message..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <Recaptcha
              sitekey="6LeS-1gaAAAAAPB1fBoYlD4ocOJ2SYA9_rg1VmWf"
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={verifyCallback}
            />
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  type="submit"
                  className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
            {confirm ? (
              <React.Fragment>
                <div
                  style={{ transform: "translate(-50%, 0)" }}
                  className="text-center fixed top-1/3 left-1/2 border border-black p-2 bg-gray-900 rounded-lg text-white"
                >
                  <div>Thanks for reaching out!</div>
                  <button
                    className="bg-white text-black px-1.5 border border-black rounded-full"
                    onClick={() => setConfirm(false)}
                  >
                    close
                  </button>
                </div>
              </React.Fragment>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
