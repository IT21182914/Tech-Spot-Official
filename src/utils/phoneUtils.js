// src/utils/phoneUtils.js

export const enhancePhoneData = (phone, index) => {
  // Add premium features to existing phone data
  const enhanced = { ...phone };

  // Add missing properties if they don't exist
  if (!enhanced.rating) {
    enhanced.rating = (4.5 + Math.random() * 0.4).toFixed(1);
  }

  // Add badges based on index and name patterns
  if (phone.name.includes("Pro") || phone.name.includes("Ultra")) {
    enhanced.isBestseller = true;
  }

  if (phone.name.includes("15") || phone.name.includes("24")) {
    enhanced.isNew = true;
  }

  if (index % 3 === 0) {
    enhanced.isHot = true;
  }

  if (index % 4 === 0) {
    enhanced.discount = `${10 + Math.floor(Math.random() * 10)}% OFF`;
  }

  return enhanced;
};

export const formatPrice = (price) => {
  if (!price) return null;
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const generateRandomReviews = () => {
  return Math.floor(Math.random() * 200) + 50;
};

export const getWhatsAppMessage = (phoneName) => {
  return `Hi Tech Spot! I'm interested in buying the ${phoneName}.`;
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy: ", err);
    return false;
  }
};
