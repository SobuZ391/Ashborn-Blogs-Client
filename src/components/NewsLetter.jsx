import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewsLetter() {
  const [email, setEmail] = useState('');

  const notify = () => {
    if (!email) {
      toast.error("Please fill the email field first");
    } else {
      toast.success("Thanks for subscribing to our newsletter");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="p-6 dark:text-gray-800 flex lg:flex-row flex-col container border rounded-xl my-4 mx-auto gap-2 ">
      <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md hover:shadow-xl dark:bg-gray-50">
        <h2 className="w-full text-3xl font-bold leading-tight">SUBSCRIBE TO MY NEWSLETTER</h2>
        <div>
       <p className='text-center   w-[80%]' >Get the latest updates and exclusive offers delivered straight to your inbox! </p>
       </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">Email</label>
          <input id="email" type="email" placeholder="Your email" value={email} onChange={handleEmailChange} required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
        </div>
        <div>
          <button className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50" onClick={notify}>Subscribe</button>
          <ToastContainer />
        </div>
      </form>
    <div>
    <section className="dark:bg-gray-100 dark:text-gray-800 border-2 rounded-xl">
    <div className="container flex flex-col justify-center p-4 my-4  mx-auto md:p-8">
      
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">How can I submit a guest post?</summary>
                <div className="px-4 pb-4">
                    <p>Submitting a guest post is easy! Simply navigate to our "Submit Guest Post" page and fill out the required fields with your article content. Make sure to follow our guidelines for guest submissions to increase your chances of acceptance.</p>
                </div>
            </details>
            <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">Can I republish your articles on my website?</summary>
                <div className="px-4 pb-4">
                    <p>We appreciate your interest in our content! However, republishing our articles on your website requires prior permission. Please reach out to us via our contact form with details about how you intend to use our content, and we'll get back to you as soon as possible.</p>
                </div>
            </details>
            <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">Do you accept sponsored posts?</summary>
                <div className="px-4 pb-4 space-y-2">
                    <p>Yes, we do accept sponsored posts under certain conditions. If you're interested in collaborating with us for sponsored content, please reach out to our marketing team through the contact form. We'll provide you with our guidelines and discuss the terms of the collaboration.</p>
                    <p>Please note that we maintain editorial integrity and will only consider sponsored posts that align with our values and interests.</p>
                </div>
            </details>
        </div>
    </div>
</section>

    </div>
</section>
  );
}

export default NewsLetter;
