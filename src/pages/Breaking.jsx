import Marquee from "react-fast-marquee";
const Breaking = () => {
  return (
    <div className="p-4 flex items-center gap-4 bg-slate-100 max-w-screen-2xl mx-auto">
      <button className="btn btn-error rounded-none">Latest News</button>
      <Marquee speed={90}>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain. 
        </p>
       <span className="text-red-700 mx-2"> [{"\u2B24"}] </span>
        <p>
         Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
        </p>
        <span className="text-red-700 mx-2"> [{"\u2B24"}] </span>
      </Marquee>

    </div>
  );
};

export default Breaking;
