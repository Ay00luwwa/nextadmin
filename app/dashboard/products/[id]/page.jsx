import React from "react";
import styles from "/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/default.jpg" alt="" fill />
        </div>
        iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" placeholder="Philip Plein" name="title" />
          <label>Price</label>
          <input
            type="email"
            placeholder="PhilipPlein@email.com"
            name="email"
          />
          <label>Stock</label>
          <input type="number" placeholder="23" name="stock" />
          <label>Color</label>
          <input type="text" placeholder="red" name="color" />
          <label>size</label>
          <textarea type="number" placeholder="45" name="size" />
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="description" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="electronicsfalse">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
