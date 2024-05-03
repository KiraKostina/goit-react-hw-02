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
  
  const updateFeedback = (feedbackType) => {
    setfeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1
    });
  };


  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedbacks={{ good, neutral, bad }} /> 

    </>
  );
}
