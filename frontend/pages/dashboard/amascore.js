import GSWidget from './GSWidget';

const GreenScoreWidget = ({ todayScore, previousDayScore, nextDayScore }) => {
  const today = new Date();
  const previousDay = new Date(today);
  const nextDay = new Date(today);
  previousDay.setDate(today.getDate() - 1);
  nextDay.setDate(today.getDate() + 1);

  return (
    <div className="p-3 bg-[#6eaa88] rounded shadow">
      <h2 className="text-2xl font-bold urbanist text-[#42282c] mb-1">
        Amazon Green Score
      </h2>
      <p className="text-base urbanist text-[#f4f4f4] mb-3">
        The <strong>Amazon Green Score</strong> tracks the environmental sustainability of your 
        e-commerce logistics by evaluating metrics like carbon footprint, 
        reusable packaging, and eco-conscious delivery options.
      </p>
      <div className="grid grid-cols-3 gap-3">
        <GSWidget score={previousDayScore} date={previousDay.toISOString()} />
        <GSWidget score={todayScore} date={today.toISOString()} />
        <GSWidget score={nextDayScore} date={nextDay.toISOString()} />
      </div>
    </div>
  );
};

export default GreenScoreWidget;
