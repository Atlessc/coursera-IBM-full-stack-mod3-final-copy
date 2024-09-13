import './index.css';
import useStore from '../../store';
import { useEffect, useState } from 'react';


const LeaveRecommendation = () => {
  const Recommendations = useStore((state) => state.Recommendations);
  const addRecommendation = useStore((state) => state.addRecommendation);
  const setThankYouPopUpVisible = useStore((state) => state.setThankYouPopUpVisible);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const message = event.target[1].value;
    
    addRecommendation({ name, message });  
    setThankYouPopUpVisible(true);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }




  return (
    <section className="LeaveRecommendation-container">
      <h2>Leave A Recommendation</h2>
      <p>if you have ever worked with me, ask for a code to leave a message.</p>
      <form className="LeaveRecommendation-form" onSubmit={handleSubmit}>
        <div className="LeaveRecommendation-Box">
          <label>Name</label>
          <input
            type="name"
            placeholder="Enter your Name"
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="LeaveRecommendation-Box">
          <label>Message</label>
          <textarea
            placeholder="Enter your message"
            onChange={handleMessageChange}
            rows= '4'
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default LeaveRecommendation;