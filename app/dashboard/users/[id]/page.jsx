import React from "react";
import styles from "/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/default.jpg" alt="" fill />
        </div>
        Philip Plein
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" placeholder="Philip Plein" name="username" />
          <label>Email</label>
          <input
            type="email"
            placeholder="PhilipPlein@email.com"
            name="email"
          />
          <label>Password</label>
          <input type="password" placeholder="" name="password" />
          <label>Phone</label>
          <input type="text" placeholder="+123456789" name="phone" />
          <label>Address</label>
          <textarea
            type="text"
            placeholder="22 MapleStreet, New York"
            name="address"
          />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
