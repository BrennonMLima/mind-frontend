import React from 'react';

interface UserImageProps {
  image: { type: string; data: number[] } | null;
}

const UserImage: React.FC<UserImageProps> = ({ image }) => {
  const convertImage = (data: number[]): string => {
    const byteArray = new Uint8Array(data);
    let binary = '';
    byteArray.forEach((byte) => binary += String.fromCharCode(byte));
    const base64 = window.btoa(binary);
    return `data:image/jpeg;base64,${base64}`;
  };

  const imageSrc = image ? convertImage(image.data) : '';

  return (
    <img src={imageSrc} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
  );
};

export default UserImage;
