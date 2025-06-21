// src/hooks/useSmartphones.js
import { useState, useEffect, useRef } from "react";
import { allPhones } from "../data";
import { appleStockList } from "../data/appleStockList";
import { samsungStockList } from "../data/samsungStockList";
import { xiaomiStockList } from "../data/xiaomiStockList";
import { vivoStockList } from "../data/vivoStockList";
import { realmeStockList } from "../data/realmeStockList";
import { infinixStockList } from "../data/infinixStockList";
import { oppoStockList } from "../data/oppoStockList";
import { huaweiStockList } from "../data/huaweiStockList";
import { pixelStockList } from "../data/pixelStockList";
import { honorStockList } from "../data/honorStockList";
import { samsungTabletsStockList } from "../data/samsungTabletsStockList";

const WHATSAPP_NUMBER = "94726048468";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const useSmartphones = () => {
  const [activeCategory, setActiveCategory] = useState("Apple");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedText, setCopiedText] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [viewCount, setViewCount] = useState(0);

  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Simulate live view counter
    const viewInterval = setInterval(() => {
      setViewCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

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

  const stockLists = {
    Apple: appleStockList,
    Samsung: samsungStockList,
    Xiaomi: xiaomiStockList,
    Vivo: vivoStockList,
    Realme: realmeStockList,
    Infinix: infinixStockList,
    "Samsung Tablets": samsungTabletsStockList,
    Oppo: oppoStockList,
    Huawei: huaweiStockList,
    "Google Pixel": pixelStockList,
    Honor: honorStockList,
  };

  const phones = allPhones[activeCategory]
    ? allPhones[activeCategory].filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const availableModels = stockLists[activeCategory] || [];

  const waLink = (msg) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

  const whatsappLink = (phone) =>
    waLink(`Hi Tech Spot! I'm interested in buying the ${phone.name}.`);

  const toggleFavorite = (phoneIndex) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(phoneIndex)) {
      newFavorites.delete(phoneIndex);
    } else {
      newFavorites.add(phoneIndex);
    }
    setFavorites(newFavorites);
  };

  const categories = Object.keys(allPhones);

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
    phones,
    availableModels,
    whatsappLink,
    toggleFavorite,
    categories,
    waLink,
    WHATSAPP_NUMBER,
    WHATSAPP_URL,
  };
};

export default useSmartphones;
