//Imports
import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Components
import { Nav } from '../../components/Nav.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';
import Calendar from '../../components/Calendar'


const Dashboard = () => {

  const [goals, setGoals] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/goals/${user._id}`)
      .then(res => {
        const sortedGoals = res.data.sort((a, b) => new Date(a.goalEndDate) - new Date(b.goalEndDate));
        const earliestGoals = sortedGoals.slice(0, 5);
        setGoals(earliestGoals);
      })
      .catch(err => console.error(err));
  }, [user._id]);

  const goalCountdown = (endDate) => {
    const today = new Date();
    const completionDate = new Date(endDate);
    const timeDifference = completionDate.getTime() - today.getTime();
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };


  return (
    <>
      {user ? (
        <div className="flex bg-background h-screen w-screen">
          <div className="fixed h-screen w-48 flex flex-col justify-evenly items-center bg-accent-dark left-0 top-0">
            <Nav user={user} />
          </div>
          <div className="flex-1 flex flex-col p-4 rounded-lg shadow-lg bg-background text-white ml-56 mr-4">
            <h1 className="text-5xl font-semibold mb-4 border-b-2 border-primary w-full text-end">
              Dashboard
            </h1>

            <div className="flex flex-col md:flex-row items-start flex-1">
              <div className="w-full md:w-2/3 bg-gray-800 text-white p-4 mb-4 md:mb-0 border border-secondary rounded flex-1">
                {/* <Calendar user={user} setUser={setUser} verified={verified} /> */}
                <Calendar />
              </div>

              <div className="md:w-1/3 md:pl-4 flex flex-col">
                <div className="border border-secondary rounded p-2 mb-4 flex-1">
                  <h2 className="text-center text-primary text-lg font-semibold mb-2">Goals</h2>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-white text-center">
                        <th className="py-2 px-2 text-xs text-center">Goal Title</th>
                        <th className="py-2 px-2 text-xs text-center">Goal End Date</th>
                        <th className="py-2 px-2 text-xs text-center">Days to Reach Goal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {goals.map((goal) => (
                        <tr key={goal._id} className="border-b border-secondary">
                          <td className="py-2 px-2 text-xs text-center">{goal.goalTitle}</td>
                          <td className="py-2 px-2 text-xs text-center">{new Date(goal.goalEndDate).toLocaleDateString('en-US')}</td>
                          <td className="py-2 px-2 text-xs text-center">{goalCountdown(goal.goalEndDate)}</td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>


                <div className="border border-secondary rounded p-2 flex-1">
                  <img src="/graph.jpg" className="w-full h-full" alt="graph" />
                </div>

                {/* <div className="border border-secondary rounded p-2 flex-1"> 
              <AllWorkouts />
              </div>

              <div className="border border-secondary rounded p-2 flex-1"> 
              <AllMeals />
              </div> */}
              </div>
            </div>
          </div>
        </div>

      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Dashboard;
