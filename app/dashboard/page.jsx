import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Card from "../ui/dashboard/card/card";
import Transactions from "../ui/dashboard/transactions/transactions";
import styles from "../ui/dashboard/dashboard.module.css";
import Chart from "../ui/dashboard/chart/chart";
import Graph from "../ui/dashboard/graph/graph";
import BarAnalysis from "../ui/dashboard/barAnalysis/barAnalysis";
const Dashboard = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
          </div>
          <Chart />
          <Transactions />
          <div className={styles.cojoined}>
            <Graph /> <BarAnalysis />
          </div>
        </div>
        <div className={styles.side}>
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
