export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (images) => {
  const promises = images.map(src => preloadImage(src));
  await Promise.all(promises);
};
