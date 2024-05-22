// src/pages/Dashboard.jsx
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import DashboardStats from "./DashboardStats";
import DashboardInfo from "./DashboardInfo";
import s from "./Dashboard.module.scss";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Tableau de board")}</title>
      </Helmet>

      <main className={s.dashboardPage}>
        <div className="container">
          <PagesHistory history={["/", t("Dashboard")]} />
        </div>

        <div className={s.container} id="dashboard-page">
          <h1>Welcome to Dashboard</h1>
          <DashboardStats />
          <DashboardInfo />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
