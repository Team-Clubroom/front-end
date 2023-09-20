import MaintenanceImageComponent from "./maintenance.image.tsx";
import {maintenance} from "./maintenance.page.styles.tsx";

interface MaintenancePageProps {

}

function MaintenancePage({}: MaintenancePageProps) {
    return (
        <div className={maintenance.maintenancePage}>
            <div className={maintenance.flexContainerClass}>
                <MaintenanceImageComponent/>
                <p className={maintenance.mainTitleClass}>Website under maintenance!</p>
                <p className={maintenance.subTitleClass}>We'll be back soon</p>
            </div>
        </div>
    );
}

export default MaintenancePage;