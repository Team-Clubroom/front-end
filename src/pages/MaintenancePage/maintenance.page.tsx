import MaintenanceImageComponent from "../MaintenancePage/maintenance.image.tsx";
import {maintenance} from "./maintenance.page.styles.ts";

export const MaintenancePage = () => {
    return (
        <div className={maintenance.maintenancePage}>
            <div className={maintenance.flexContainerClass}>
                <MaintenanceImageComponent/>
                <p className={maintenance.mainTitleClass}>Website under maintenance!</p>
                <p className={maintenance.subTitleClass}>We'll be back soon</p>
            </div>
            <div className={maintenance.borderClass}>
                <div className={maintenance.containerClass}>
                    <span className={maintenance.boldTextClass}>You can contact us:</span>
                    <a href="#" className={maintenance.linkClass} target="_blank" title="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" className={maintenance.svgClass} viewBox="0 0 20 20"
                             fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span>teamclubroom@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
};