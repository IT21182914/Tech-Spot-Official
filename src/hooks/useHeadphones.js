// src/hooks/useHeadphones.js
import { useState, useEffect, useRef } from "react";
import { headphones } from "../data/headphones";
import { headphonesStockList } from "../data/headphonesStockList";

const WHATSAPP_NUMBER = "94726048468";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const useHeadphones = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedText, setCopiedText] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [viewCount, setViewCount] = useState(0);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Auto-scroll functionality for stock list
  useEffect(() => {
    const viewInterval = setInterval(() => {
      setViewCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 8000);

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

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(viewInterval);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const pauseAutoScroll = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
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
    }, 60000);
  };

  const categories = ["All", "Earbuds", "Over-Ear", "Gaming", "Premium"];

  const filteredHeadphones = headphones.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const availableModels = headphonesStockList;

  const waLink = (msg) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

  const whatsappLink = (item) =>
    waLink(`Hi Tech Spot! I'm interested in buying the ${item.name}.`);

  const toggleFavorite = (itemIndex) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemIndex)) {
      newFavorites.delete(itemIndex);
    } else {
      newFavorites.add(itemIndex);
    }
    setFavorites(newFavorites);
  };

  return {
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm,
    copiedText,
    setCopiedText,
    favorites,
    setFavorites,
    hoveredCard,
    setHoveredCard,
    viewCount,
    scrollRef,
    pauseAutoScroll,
    headphones: filteredHeadphones,
    availableModels,
    whatsappLink,
    toggleFavorite,
    categories,
    waLink,
    WHATSAPP_NUMBER,
    WHATSAPP_URL,
  };
};

export default useHeadphones;
