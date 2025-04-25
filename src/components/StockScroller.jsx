import React, { useRef, useEffect } from "react";
import { BiCopy } from "react-icons/bi";
import { MdPhoneIphone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/94726048468";
const waLink = (msg) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

const StockScroller = ({ list }) => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    start();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const start = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 2;
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 30);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(start, 60_000);
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 bg-white text-gray-800 rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-center gap-2 mb-4">
        <MdPhoneIphone className="text-xl text-blue-600" />
        <h2 className="text-2xl font-bold text-center">Available Models</h2>
      </div>

      <p className="text-center text-xs sm:text-sm mb-4 text-blue-500">
        👉 Tap model to copy | Quick order on WhatsApp
      </p>

      <div
        ref={scrollRef}
        onScroll={pause}
        className="h-64 overflow-y-auto scroll-smooth pr-2"
      >
        <ul className="space-y-2 text-sm md:text-base">
          {list.map((line, i) => {
            const [model] = line.split("–");
            return (
              <li
                key={i}
                className="bg-gray-100 px-3 py-2 rounded text-gray-800 shadow-sm flex justify-between items-center gap-3"
              >
                <span
                  className="flex-1 break-words cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(model.trim())}
                >
                  {line}
                </span>
                <a
                  href={waLink(
                    `Hi Tech Spot! I'm interested in buying the ${model.trim()}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 min-w-[2rem] transition duration-300"
                >
                  <FaWhatsapp className="text-base" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StockScroller;
