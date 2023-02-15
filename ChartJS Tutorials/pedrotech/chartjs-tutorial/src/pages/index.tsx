// React
import { useState } from "react";
// Next Components
import Head from "next/head";
// Styles
import styles from "@/styles/Home.module.css";
// Data
import { UserData } from "@/data";
// ChartJS
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import { ChartData } from "chart.js";

const Home: React.FC = () => {
  const [userData, setUserData] = useState<ChartData>({
    labels: UserData.map(({ year }) => year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map(({ userGain }) => userGain),
        backgroundColor: ["yellow", "blue", "red", "green", "magenta"],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Users Lost",
        data: UserData.map(({ userLost }) => userLost),
        backgroundColor: ["magenta", "green", "red", "blue", "yellow"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return (
    <>
      <Head>
        <title>ChartJS with NextJS</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>Hello ChartJS with NextJS!</h1>
        <div style={{ width: "30rem" }}>
          <BarChart chartData={userData} />
        </div>
        <div style={{ width: "30rem" }}>
          <LineChart chartData={userData} />
        </div>
        <div style={{ width: "30rem" }}>
          <PieChart chartData={userData} />
        </div>
      </div>
    </>
  );
};

export default Home;