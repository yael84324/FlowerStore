import React, { useState, useEffect } from 'react';

export default function ImageComponent(props) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    async function loadImage() {
      try {
        const imageModule = await import(`../images/${props.imageName}`);
        setImageSrc(imageModule.default);
      } catch (error) {
        console.error(`Error loading image: ${error}`);
      }
    }
    loadImage();
  }, [props.imageName]);

  return (
    <img src={imageSrc}/>
  );
}
