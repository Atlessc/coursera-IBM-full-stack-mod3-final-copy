import React from 'react';
import useStore from '../../store'; // Adjust the import based on your store setup
import './index.css'; // Optional: for styling

const ThankYouPopUp = () => {
  const thankYouPopUpVisible = useStore((state) => state.thankYouPop);
  const setThankYouPopUpVisible = useStore((state) => state.setThankYouPopUpVisible);
  
  const handlePopUpVisibility = () => {
    setThankYouPopUpVisible(false);
  }

  return (
    <div className="thank-you-popup-Container">
      <div className="icon-container">
        <span className="check-icon">✔️</span>
      </div>
      <p>Thank you for leaving a recommendation</p>
      <button className='ok-button' onClick={handlePopUpVisibility}>Ok</button>
    </div>
  );
};

export default ThankYouPopUp;