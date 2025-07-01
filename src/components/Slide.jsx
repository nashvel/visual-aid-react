import React from 'react';

const Slide = ({ data, isActive }) => {
  if (!isActive) return null;

  return (
    <div className="card fade-in">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        <i className={`${data.icon} mr-3`}></i>
        {data.title}
      </h2>
      <div>{data.content}</div>
    </div>
  );
};

export default Slide;
