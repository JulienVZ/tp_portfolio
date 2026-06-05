import React from 'react';

export default function Footer() {
    return (
    <footer className="w-full py-16 flex flex-col items-center justify-center bg-white">

        {/* Conteneur des icônes */}
        <div className="flex space-x-8 mb-8">

            {/* Icône Instagram */}
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#25282B] hover:text-[#fefa36] transition-colors"
            >
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.9 1.11 1.152 1.772.248.638.416 1.363.465 2.428.048 1.067.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a4.883 4.883 0 0 1-1.152 1.772 4.883 4.883 0 0 1-1.772 1.152c-.638.248-1.363.416-2.428.465-1.067.048-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.883 4.883 0 0 1-1.772-1.152 4.883 4.883 0 0 1-1.152-1.772c-.248-.638-.416-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.883 4.883 0 0 1 1.152-1.772A4.883 4.883 0 0 1 5.45 2.525c.638-.248 1.363-.416 2.428-.465C8.944 2.013 9.283 2 12 2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.25-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
                    />
                </svg>
            </a>

            {/* Icône LinkedIn */}
            <a href="https://www.linkedin.com/in/julien-vouilloz-0428b935b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#25282B] hover:text-[#fefa36] transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
            </a>

            {/* Icône Email */}
            <a
                href="mailto:julien.vouilloz@efrei.net"
                aria-label="Email"
                className="text-[#25282B] hover:text-[#fefa36] transition-colors"
            >
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            </a>

        </div>

        {/* Copyright */}
        <p className="text-[#828282] text-sm md:text-base font-sans">
            Julien VOUILLOZ 2026
        </p>

    </footer>
);
}