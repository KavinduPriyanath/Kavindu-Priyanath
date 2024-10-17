import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ isOpen, onClose, onEmailSent }) {
    const form = useRef();

    //const [notification, setNotification] = useState('fef'); // State for showing notifications

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_sg6dodc', 'template_0os1gms', form.current, {
          publicKey: 'QCcaxLjlDDyBiH6nI',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            //setNotification('Email sent successfully!'); // Set notification message
            //setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
            onEmailSent();
            onClose(); // Close popup after sending
          },
          (error) => {
            console.log('FAILED...', error.text);
            onEmailSent("Error sending the email");
            //setNotification('Error sending email.');
            //setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
          },
        );
    };

  if (!isOpen) return null; // Don't render the popup if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-sky-50 p-8 rounded-lg shadow-lg max-w-md w-full">
        
        <h2 className="text-2xl font-bold mb-6 text-black">Let's Talk!!!</h2>
        <form ref={form} onSubmit={sendEmail}>
        
        {/* Name */}
          <div className="mb-4">
            <label htmlFor="from_name" className="block text-gray-700 font-bold">Name</label>
            <input 
              type="text" 
              name="from_name" 
              className="w-full p-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required
            />
          </div>        

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
            <input 
              type="email" 
              name="from_email" 
              className="w-full p-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold">Subject</label>
            <input 
              type="text" 
              name="subject" 
              className="w-full p-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required
            />
          </div>

          {/* Content */}
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-bold">Content</label>
            <textarea 
              name="message" 
              className="w-full p-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" 
              rows="4"
              required
            />
          </div>

          {/* Send Button */}
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Close</button>
            <button type="submit" value="Send" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
