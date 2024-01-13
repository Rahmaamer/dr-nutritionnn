import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from "./paymentForm.module.css";

const PaymentForm = ({setIsProceed}) => {
    const { register, handleSubmit, formState: { errors }, reset, trigger, getValues } = useForm();
    const [selectedTime, setSelectedTime] = useState('12:00');

  const handlePaymentClick = async () => {
    // Pause and wait for the validation of all form fields
    const isValid = await trigger();
    // Check if the form is valid
    if (isValid) {
      // If valid, get the form data
      const formData = getValues();

      // Log the form data to the console
      console.log('Form data:', formData);

      // Set isProceed state to true, indicating it's okay to proceed
      setIsProceed(true);
    }
  }

      //handle time changes
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  //handle form submit
  const onSubmit = (data) => {
    console.log(data);
    // Reset the form after submission
    reset();
  }

  //pattern expertion for email & phone  aka (user cant put characters and must put email in format name@gmail.com )
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  return (
    <form className={styles.infoForm} noValidate onSubmit={handleSubmit(onSubmit)} >
    <h3 style={{ textAlign: 'left', marginBottom: '16px' }}>Contact Information</h3>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
<div style={{ width: '48%' }}>
  <label className={styles.inputLabels} htmlFor="firstName">
    First Name
  </label>
  <input
    type="text"
    id="firstName"
    placeholder="Enter First Name"
    className={`styles.formControl ${errors.firstName ? 'is-invalid' : ''}`}
    {...register('firstName', { required: true })}
  />
  {errors.firstName && <div className={styles.invalidFeedback}>First Name is required</div>}
</div>

<div style={{ width: '48%' }}>
  <label htmlFor="lastName" className={styles.inputLabels}>
    Last Name
  </label>
  <input
    type="text"
    id="lastName"
    placeholder="Enter Last Name"
    className={`styles.formControl ${errors.lastName ? 'is-invalid' : ''}`}
    {...register('lastName', { required: true })}
  />
  {errors.lastName && <div className={styles.invalidFeedback}>Last Name is required</div>}
</div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '59px' }}>
<div style={{ width: '48%' }}>
  <label htmlFor="email" className={styles.inputLabels}>
    Email
  </label>
  <input
    type="email"
    id="email"
    placeholder="Your email@gmail.com"
    className={`styles.formControl${errors.email ? 'is-invalid' : ''}`}
    {...register('email', { required: true, pattern: regEmail })}
  />
  {errors.email && errors.email.type === 'required' && (
    <div className={styles.invalidFeedback}>Email is required</div>
  )}
  {errors.email && errors.email.type === 'pattern' && (
    <div className={styles.invalidFeedback}>Please provide a valid email address</div>
  )}
</div>

<div style={{ width: '48%' }}>
  <label htmlFor="contactNumber" className={styles.inputLabels}>
    Phone Number
  </label>
  <input
    type="text"
    id="contactNumber"
    placeholder="+1-(0000 000 0000)"
    className={`styles.formControl ${errors.contactNumber ? 'is-invalid' : ''}`}
    {...register('contactNumber', { required: true, pattern: phoneRegExp })}
  />
  {errors.contactNumber && errors.contactNumber.type === 'required' && (
    <div className={styles.invalidFeedback}>Phone is required</div>
  )}
  {errors.contactNumber && errors.contactNumber.type === 'pattern' && (
    <div className={styles.invalidFeedback}>Please provide a valid phone number</div>
  )}
</div>
</div>

<h3 style={{ textAlign: 'left', marginBottom: '1rem' }}>Delivery Information</h3>

<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
<div style={{ width: '48%' }}>
  <label htmlFor="dob" className={styles.inputLabels}>
    Delivery Date
  </label>
  <input
    type="date"
    id="dob"
    className={`styles.formControl ${errors.formGridAddress1 ? 'is-invalid' : ''}`}
    {...register('dob', { required: true })}
    name="dob"
  />
  {errors.dob && errors.dob.type === 'required' && (
    <div className={styles.invalidFeedback}>Delivery Date is required</div>
  )}
</div>

<div style={{ width: '48%' }}>
  <label htmlFor="formTimePicker" className={styles.inputLabels}>
    Convenient Time
  </label>

  <input
    type="time"
    id="formTimePicker"
    className={styles.formControl}
    onChange={(e) => handleTimeChange(e.target.value)}
    value={selectedTime}
    step={900} // 15 minutes in seconds (15 * 60)
  />

</div>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '84px' }}>
<div style={{ width: '31%' }}>
  <label htmlFor="formGridCity" className={styles.inputLabels}>
    City
  </label>
  <input
  type='text'
    className={`styles.formControl ${errors.formGridCity ? 'is-invalid' : ''}`}
    {...register('formGridCity', { required: true })}
  />
  {errors.formGridCity && errors.formGridCity.type === 'required' && (
    <div   className={styles.invalidFeedback}>City is required</div>
  )}
</div>

<div style={{ width: '31%' }}>
  <label htmlFor="formGridAddress1"className={styles.inputLabels}>
    Address
  </label>
  <input
  type='text'
  id={styles.address}
    className={`styles.formControl ${errors.formGridAddress1 ? 'is-invalid' : ''}`}
    {...register('formGridAddress1', { required: true })}
    placeholder="1234 Main St"
  />
  {errors.formGridAddress1 && errors.formGridAddress1.type === 'required' && (
    <div   className={styles.invalidFeedback}>Address is required</div>
  )}
</div>

<div style={{ width: '31%' }}>
  <label htmlFor="formGridZip" className={styles.inputLabels}>
    Zip
  </label>
  <input
  type='text'
    className={styles.formControl}
    {...register('formGridZip', { required: true })}
    placeholder="00000"
  />
</div>
</div>
    <button className={styles.proceedBtn} type="submit" onClick={handlePaymentClick} >
      Proceed to Payment
    </button>
  </form>

  )
}

export default PaymentForm;