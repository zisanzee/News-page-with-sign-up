import moment from "moment";
import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      const h = moment().format("h");
      const m = moment().format("mm");
      const s = moment().format("ss");
      const a = moment().format("a");
      setTime({h,m,s,a});
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-3 items-center">
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": time.h }}></span>
        </span>
      </div>
      :
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": time.m }}></span>
        </span>
        
      </div>
      :
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": time.s }}></span>
        </span>
        {time.a}
      </div>
    </div>
  );
};

export default Time;
