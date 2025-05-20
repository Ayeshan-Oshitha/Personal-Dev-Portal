import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up the interval to update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full flex flex-col items-center mt-40 text-4xl font-mono text-green-400 gap-y-10">
      <p>{time.toDateString()}</p>
      <p> {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Timer;
