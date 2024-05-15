import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function NewsLetter() {

  const notify = () => toast("Thanks for subscribing to our newletter");
  

  return (
<section className="p-6 dark:text-gray-800">
	<form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md hover:shadow-xl dark:bg-gray-50">
		<h2 className="w-full text-3xl font-bold leading-tight">SUBSCRIBE TO MY NEWSLETTER</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
		</div>
	
		<div>
          <button className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50" onClick={notify}>Subscribe</button>
   
   <ToastContainer />
		</div>
	</form>
</section>
  );
}

export default NewsLetter;
