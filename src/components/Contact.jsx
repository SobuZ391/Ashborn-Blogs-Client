import React from 'react';

const Contact = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
    <div className="flex flex-col justify-between">
        <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Get in Touch</h2>
            <div className="dark:text-gray-400">Have a question or suggestion? We'd love to hear from you.</div>
        </div>
    <div  >
    <img  src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1715558400&semt=ais_user" alt="Contact Illustration" className="p-6 h-52 md:h-80 object-cover  " />
    </div>
    </div>
    <form noValidate className="space-y-6">
        <div>
            <label htmlFor="name" className="text-sm">Your Name</label>
            <input id="name" type="text" placeholder="name" className="w-full p-3 rounded dark:bg-gray-100" />
        </div>
        <div>
            <label htmlFor="email" className="text-sm">Your Email</label>
            <input id="email" type="email" placeholder="email" className="w-full p-3 rounded dark:bg-gray-100" />
        </div>
        <div>
            <label htmlFor="message" className="text-sm">Your Message</label>
            <textarea id="message" rows="3" placeholder="Type your message here..." className="w-full p-3 rounded dark:bg-gray-100"></textarea>
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50 dark:bg-violet-700 dark:text-gray-100">Send Message</button>
    </form>
</div>

    );
};

export default Contact;