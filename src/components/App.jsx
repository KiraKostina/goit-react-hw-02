import { useState} from "react";
import "./App.module.css";
import Description from "../components/Description/Description";
import Options from "../components/Options/Options";
import Feedback from "../components/Feedback/Feedback";

export default function App() {
  const [feedbacks, setfeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const { good, neutral, bad } = feedbacks;
  


  return (
    <>
      <Description />
       <Options />
      <Feedback feedbacks={{ good, neutral, bad }} /> 

    </>
  );
}


//  <Profile
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
//       />

//       <FriendList friends={friends} />

//       <TransactionHistory items={transactions} />