import React from "react";
import styles from "./products.module.css";
import Image from "next/image";
import Link from "next/link";
import Search from "app/ui/dashboard/search/search";
import Paginantion from "app/ui/dashboard/pagination/pagination";

const ProductsPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a product.." />
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  iphone
                </div>
              </td>
              <td>shshsjnw&uiwen@uijweqwndwqasn_cyc=qw</td>
              <td>$123</td>
              <td>Oct 29 2023</td>
              <td>34</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/products/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Paginantion />
      </div>
    </div>
  );
};

export default ProductsPage;
