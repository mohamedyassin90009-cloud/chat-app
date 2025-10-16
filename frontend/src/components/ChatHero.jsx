import React from "react";

function Hero() {
  return (
    <div lg:flex items-center justify-center bg-base-200 p-12>
      <div className="relative w-full h-screen bg-transparent flex items-center justify-center overflow-hidden text-white">
        {/* Hero Title */}
        <h1 className="absolute top-10 text-5xl font-bold animate-pulse text-center">
          Chat Like Never Before!
        </h1>

        {/* Chat Simulation Container (centered) */}
        <div className="relative w-96 h-[28rem] bg-gray-900/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl flex flex-col justify-end space-y-3 overflow-hidden">
          {/* Incoming Message */}
          <div className="bg-gray-800 rounded-2xl rounded-tl-none px-4 py-2 max-w-[70%] animate-bounce-in-left">
            Hey! Welcome to FunChat 🚀
          </div>

          {/* Outgoing Message */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl rounded-tr-none px-4 py-2 max-w-[60%] self-end animate-bounce-in-right">
            Thanks! Can't wait to try it!
          </div>

          {/* Typing Dots */}
          <div className="flex items-center gap-1 h-4 mt-2">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-400"></span>
          </div>
        </div>

        {/* Floating Background Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/30 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-spin-slow-reverse"></div>

        {/* Tailwind Animations */}
        <style jsx>{`
          @keyframes bounce-in-left {
            0% {
              transform: translateX(-100%) scale(0.5);
              opacity: 0;
            }
            60% {
              transform: translateX(20%) scale(1.1);
              opacity: 1;
            }
            100% {
              transform: translateX(0) scale(1);
            }
          }
          @keyframes bounce-in-right {
            0% {
              transform: translateX(100%) scale(0.5);
              opacity: 0;
            }
            60% {
              transform: translateX(-20%) scale(1.1);
              opacity: 1;
            }
            100% {
              transform: translateX(0) scale(1);
            }
          }
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes spin-slow-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          .animate-bounce-in-left {
            animation: bounce-in-left 0.8s ease forwards;
          }
          .animate-bounce-in-right {
            animation: bounce-in-right 0.8s ease forwards;
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 25s linear infinite;
          }
          .animate-bounce {
            animation: bounce 1s infinite ease-in-out;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
        `}</style>
      </div>
    </div>
  );
}

const ChatHero = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <Hero />
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default ChatHero;
