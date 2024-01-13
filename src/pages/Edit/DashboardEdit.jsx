import React, { useState } from 'react'
import { FaCheck, FaPenToSquare } from 'react-icons/fa6';
import styles from './dashEdit.module.css';

export default function DashboardEdit() {
    const [name, setName] = useState('Account Name EX');
    const [email, setEmail] = useState('AccountName@gmail.com');
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEditClick = () => {
        setIsEditing(true);
      };
    
      const handleSaveClick = () => {
        setIsEditing(false);
      };
    
      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

  return (
<section className={styles.dashEdit} >
    <div className={styles.dashContent}>
        <h3 className={styles.dashTitle}>Dashboard</h3>
        <hr/>
    </div>
    
    <div className={styles.accInfo}>
        <h3 >Account Information</h3>
    </div>
    <div className={styles.btnsRender}>
        {isEditing ? (
            <button className={styles.dashBtn} type="button"  onClick={handleSaveClick}>
                <FaCheck style={{ marginRight: '5px' }} />
                Save
            </button>
        ) : (
            <button className={styles.dashBtn} type="button"  onClick={handleEditClick}>
                <FaPenToSquare style={{ marginRight: '5px' }} />
                Edit
            </button>
        )}
    </div>
    <form className={styles.formRender} style={{ marginTop: '50px' }}>
        <div style={{ marginBottom: '20px' }}>
            <label className={styles.inputLabels} htmlFor="nameInput">Name:</label>
            {isEditing ? (
                <input type="text" id={styles.nameInput} value={name} onChange={handleNameChange}/>
            ) : (
                <p className={styles.namePara}>{name}</p>
            )}
        </div>
        <div style={{ marginBottom: '20px' }}>
            <label className={styles.inputLabels} htmlFor="emailInput">Email:</label>
            {isEditing ? (
                        <input type="email" id={styles.emailInput} value={email} onChange={handleEmailChange}/>
            ) : (
                <p className={styles.emailPara}>{email}</p>
            )}
        </div>
    </form>
</section>

  )
}
