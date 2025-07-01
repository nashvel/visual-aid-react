import React from 'react';

const GifEmbed = ({ postid, width = '100%', aspectRatio = '1.5' }) => {
  return (
    <div className="relative w-full h-full">
      <iframe
        src={`https://tenor.com/embed/${postid}?s=1`}
        title="GIF"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        style={{
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default GifEmbed;
