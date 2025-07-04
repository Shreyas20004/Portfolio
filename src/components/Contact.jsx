import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,     // <-- replace this
        import.meta.env.VITE_TEMPLATE_KEY,    // <-- replace this
        form.current,
        import.meta.env.VITE_PUBLIC_KEY      // <-- replace this
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setSuccess(false);
          console.error(error.text);
        }
      );
  };

  return (
    <section className="py-16 bg-gray-900 text-white px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg">
              Let’s connect! I’m open to freelance work, internships, or collaborations.
            </p>
            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-blue-400 hover:underline">
                <a href="mailto:shreyas2004src@gmail.com">shreyas2004src@gmail.com</a>
              </p>
            </div>
            <div>
              <p className="font-semibold">LinkedIn:</p>
              <p className="text-blue-400 hover:underline">
                <a href="https://linkedin.com/in/shreyasnair04" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/shreyasnair04
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold">GitHub:</p>
              <p className="text-blue-400 hover:underline">
                <a href="https://github.com/Shreyas20004" target="_blank" rel="noopener noreferrer">
                  github.com/Shreyas20004
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-5"
          >
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                name="reply_to"
                required
                className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
            >
              Send Message
            </button>
            {success === true && (
              <p className="text-green-400 mt-3">Your message has been sent successfully!</p>
            )}
            {success === false && (
              <p className="text-red-400 mt-3">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
