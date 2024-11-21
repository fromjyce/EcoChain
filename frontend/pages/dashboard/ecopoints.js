const EcoPointsTracker = ({ currentPoints, nextTarget }) => {
    const progressPercentage = Math.min((currentPoints / nextTarget) * 100, 100);
    const remainingPoints = nextTarget - currentPoints;
  
    return (
      <div className="bg-[#6eaa88] p-3 rounded shadow">
            <h2 className="text-2xl font-bold urbanist text-[#363529] mb-1">EcoPoints Tracker</h2>
        <p className="text-base urbanist text-[#f4f4f4] mb-1">
          Track your progress toward the next reward and keep earning <strong>EcoPoints</strong> by adopting sustainable practices.
        </p>
            <p className="text-4xl font-semibold text-[#42282c] kanit">{currentPoints}</p>
        <p className="text-base text-[#f4f4f4] kumbh_sans">
          Target: {nextTarget} EcoPoints
        </p>
        <div className="mt-3 bg-[#7b696b] rounded-full h-4">
          <div
                className="bg-[#42282c] h-4 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-[#f4f4f4] mt-2 kumbh_sans">
          {remainingPoints > 0
            ? `${remainingPoints} points to unlock your next reward!`
            : `Congratulations! You've reached the target!`}
        </p>
      </div>
    );
  };
  
  export default EcoPointsTracker;
  