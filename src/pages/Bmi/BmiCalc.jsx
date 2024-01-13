import React, { useState } from 'react';
import styles from ".//bmiCalc.module.css";


export default function BmiCalc() {
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiData, setBmiData] = useState(null);
  const [validated, setValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [showModal, setShowModal] = useState(false);



  const handleCloseModal = () => {
    setShowModal(false);
  };


  //calculate Bmi function
  const calculateBMI = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setShowModal(true); // Show the modal after submitting the form

    // Use state values
    const ageValue = parseInt(age);
    const genderValue = gender.toLowerCase();
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);


    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
    }

    setValidated(true);


    // Check if age, weight, and height are non-negative
    if (ageValue <= 0 || weightValue <= 0 || heightValue <= 0) {
      console.log('Please enter non-negative and non-zero values.');
      return;
    }

    // Check if height and weight are valid numbers
    if (isNaN(heightValue) || isNaN(weightValue) || isNaN(ageValue)) {
      console.log('Invalid value');
      return;
    }

    // Calculate BMI
    const bmi = weightValue / ((heightValue / 100) * (heightValue / 100));

    // Define the BMI categories and their corresponding ranges
    const categories = [
      { label: 'Underweight', min: 0, max: 18.5 },
      { label: 'Normal weight', min: 18.5, max: 24.9 },
      { label: 'Overweight', min: 24.9, max: 29.9 },
      { label: 'Obesity', min: 29.9, max: Infinity },
    ];

    // Find the category based on the calculated BMI
    let category = '';
    for (const item of categories) {
      if (bmi >= item.min && bmi <= item.max) {
        category = item.label;
        break;
      }
    }

    // Display the result

    console.log('Age:', ageValue);
    console.log('Gender:', genderValue);
    console.log('BMI:', bmi.toFixed(2));
    console.log('Category:', category);


    // Save BMI data to state
    setBmiData({
      age: ageValue,
      gender: genderValue,
      bmi: bmi.toFixed(2),
      category,
    });

    // Reset the form fields
    setGender('');
    setActivityLevel('');
    setAge('');
    setWeight('');
    setHeight('');

//reset submit
setIsSubmitted(false);

    // Reset the validation state
    setValidated(false);

  };

  return (
    <>
  <section className={styles.bmiContent}>
   
          <div className="formContainer" >
            <form noValidate validated={validated} className="form" onSubmit={calculateBMI}>
              <div className="form-row">
                <h3 className={styles.bmiTitle} >
                  BMI Calculator
                </h3>
                <div className="form-group">
                  <label className={styles.formLabel}>Gender</label>
                  <select className={styles.formSelect} value={gender} required onChange={(e) => setGender(e.target.value)}>
                    <option style={{ color: '#808080' }} value="" disabled>
                      Select
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className={styles.formLabel}>Physical activity</label>
                <select className={styles.formSelect} value={activityLevel} required onChange={(e) => setActivityLevel(e.target.value)}>
                  <option style={{ color: '#808080' }} value="" disabled>
                    Select
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="form-group">
  <label className={styles.formLabel}>Age</label>
  <input
    className={styles.formInput}
    type="number"
    placeholder="Enter"
    value={age}
    onChange={(e) => setAge(e.target.value)}
    required
  />
            {(isSubmitted && !age )  && <div className="invalid-feedback">Please enter age.</div>}



</div>

              <div className="form-group">
                <label className={styles.formLabel}>Weight (In kg)</label>
                <input
                  className={styles.formInput}
                  type="number"
                  placeholder="Enter"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required

                />
          {isSubmitted && !weight && <div className="invalid-feedback">Please enter weight.</div>}

              </div>

              <div className="form-group">
                <label className={styles.formLabel}>Height (In cm)</label>
                <input
                  className={styles.formInput}
                  type="number"
                  placeholder="Enter"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
          {isSubmitted && !height && <div className="invalid-feedback">Please enter height.</div>}
              </div>

              <div>
                <button   className={styles.submitBtn} type="submit">
                  Submit
                </button>
              </div>
            </form>

            {/* Display Alert with BMI data */}
 {/* Modal content */}

 {bmiData && showModal && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <span className={styles.close} onClick={handleCloseModal}>&times;</span>
            <div className={styles.modalContent}>
              <h4>BMI Data:</h4>
              <ul style={{ listStyle: 'none' }}>
                <li>Age: {bmiData.age}</li>
                <li>Gender: {bmiData.gender}</li>
                <li>BMI: {bmiData.bmi}</li>
                <li>Category: {bmiData.category}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
          </div>

    </section>
    </>
  );

}