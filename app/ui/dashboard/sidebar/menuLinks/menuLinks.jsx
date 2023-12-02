import Link from "next/link";
import styles from "./menuLinks.module.css";

const menuLinks = ({ item }) => {
  return (
    <Link href={item.path} className={styles.container}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default menuLinks;
