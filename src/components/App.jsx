import { useState } from 'react';
import './App.module.css';
import Description from '../components/Description/Description';
import Options from '../components/Options/Options';
import Feedback from '../components/Feedback/Feedback';
import Notification from '../components/Notification/Notification';

export default function App() {
  const [feedbacks, setfeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;

  const updateFeedback = feedbackType => {
    setfeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setfeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} handleReset={handleReset} />
      {totalFeedback > 0 ? (
        <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </>
  );
}
