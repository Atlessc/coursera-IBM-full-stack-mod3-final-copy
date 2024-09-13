import { useEffect } from 'react';
import './index.css';
import useStore from '../../store';
import ThankYouPopUp from '../ThankYouPopUp/ThankYouPopUp';

const Recommendations = () => {
  const Recommendations = useStore((state) => state.Recommendations);
  const setRecommendations = useStore((state) => state.setRecommendations);
  const thankYouPopUpVisible = useStore((state) => state.thankYouPopUpVisible);

  const recommendationList = [
    {
      message: "I have worked with John for over 10 years. He is a great team player and a very talented developer.",
      name: "Jane Doe"
    },
    {
      message: "John is a quick learner and he is always looking for new challenges. He is a great asset to any team.",
      name: "John Smith"
    },
    {
      message: "I have worked with John on several projects. He is a very talented developer and he always delivers high-quality work.",
      name: "Jane Smith"
    }
  ];

  useEffect(() => {
    setRecommendations(recommendationList);
  }, []);

  return (
    <section id="Recommendations" className='Recommendations-Container'>
      <h2>Recommendations</h2>
      <div className="recommendations">
        {Recommendations.map((recommendation, index) => {
          return (
            <div key={index} className="recommendation">
              <blockquote><i>"{recommendation.message}"</i></blockquote>
              <p className="author">- {recommendation.name}</p>
            </div>
          );
        })}
      </div>
      {thankYouPopUpVisible === true &&
            <ThankYouPopUp />
          }
    </section>
  );
}

export default Recommendations