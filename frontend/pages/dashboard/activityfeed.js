const ActivityFeed = ({ activities = [] }) => {
  return (
    <div className="bg-[#6eaa88] p-3 rounded shadow">
      <h2 className="text-2xl font-bold urbanist text-[#363529] mb-1">Activity Feed</h2>
      <p className="text-base urbanist text-[#f4f4f4]">
        Stay updated with your recent sustainability actions and achievements.
      </p>
      <ul>
        <div className="border-b border-[#fefee3ff] mt-2"></div>
        {activities.map((activity) => (
          <li key={activity.id} className="border-b border-[#fefee3ff] py-2">
            <p className="text-sm text-[#110d1e] poppins">{activity.action}</p>
            <p className="text-xs text-[#f4f4f4] kumbh_sans">{activity.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
