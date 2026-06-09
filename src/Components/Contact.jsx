import React from 'react';

export default function Contact() {
    return (
        <section id="contacts" className="w-full py-20 bg-white">
            <div className="max-w-2xl mx-auto px-6 md:px-12 w-full">

                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-title font-bold text-[#25282B] mb-3">
                        Contact
                    </h2>
                    <div className="w-20 h-1 bg-[#fefa36] rounded-full"></div>
                </div>

                <form
                    action="https://formsubmit.co/julien.vouilloz@efrei.net"
                    method="POST"
                    className="flex flex-col w-full font-sans"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={window.location.href} />

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="name" className="text-[#25282B] font-bold text-sm mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#fefa36] focus:ring-1 focus:ring-[#fefa36] bg-white transition-colors"
                        />
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="email" className="text-[#25282B] font-bold text-sm mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#fefa36] focus:ring-1 focus:ring-[#fefa36] bg-white transition-colors"
                        />
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="message" className="text-[#25282B] font-bold text-sm mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#fefa36] focus:ring-1 focus:ring-[#fefa36] bg-white resize-none transition-colors"
                        ></textarea>
                    </div>

                    <div className="flex justify-end mt-2">
                        <button
                            type="submit"
                            className="bg-[#fefa36] text-[#25282B] font-bold px-8 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </form>

            </div>
        </section>
    );
}