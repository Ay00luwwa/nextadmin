import React from "react";
import styles from "app/ui/dashboard/products/addProducts/addProducts.module.css";

const addProductsPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />

        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default addProductsPage;
