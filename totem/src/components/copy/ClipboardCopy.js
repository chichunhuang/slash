// ClipboardCopy.js
import React, { useRef } from 'react';

const ClipboardCopy = ({ message }) => {
  const divRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      alert('訊息已複製到剪貼簿');
    } catch (err) {
      console.error('複製失敗:', err);
      alert('複製失敗，請重試');
    }
  };

  return (
    <div>
      <div ref={divRef}>{message}</div>
      <button onClick={handleCopy}>複製</button>
    </div>
  );
};

export default ClipboardCopy;
