import MaintenanceImageComponent from "./maintenance.image.tsx";
import { maintenance } from "./maintenance.page.styles.tsx";
import { Helmet } from "react-helmet";

interface MaintenancePageProps {}

function MaintenancePage({}: MaintenancePageProps) {
  return (
    <>
      <Helmet>
        <title>Under Maintenance - CELDV</title>
      </Helmet>
      <div className={maintenance.maintenancePage}>
        <div className={maintenance.flexContainerClass}>
          <MaintenanceImageComponent />
          <p className={maintenance.mainTitleClass}>
            Website under maintenance!
          </p>
          <p className={maintenance.subTitleClass}>We'll be back soon</p>
        </div>
      </div>
    </>
  );
}

export default MaintenancePage;
