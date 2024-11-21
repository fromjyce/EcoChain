const GSWidget = ({ score, date }) => {
    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    const formatDate = (inputDate) => {
      const dateObj = new Date(inputDate);
      const day = dateObj.getDate();
      const month = dateObj.toLocaleString("default", { month: "short" })
      const weekday = dateObj.toLocaleString("default", { weekday: "short" });
      return `${day}${getOrdinalSuffix(day)} ${month}, ${weekday}`;
    };
    const isFutureDate = (inputDate) => {
      const today = new Date().setHours(0, 0, 0, 0);
      return new Date(inputDate).setHours(0, 0, 0, 0) > today;
    };
  
    return (
      <div className="items-center justify-center align-items bg-[#f4f4f4] p-3 rounded shadow text-center">
        <p className="text-3xl font-semibold text-[#2c6e49ff] kanit">{score}</p>
        <p className="text-sm text-[#102409] kumbh_sans">{formatDate(date)}</p>
        {isFutureDate(date) && (
          <p className="text-xs font-semibold text-[#2c6e49ff] mt-1 kumbh_sans">Predicted</p>
        )}
      </div>
    );
  };
  
  export default GSWidget;
  