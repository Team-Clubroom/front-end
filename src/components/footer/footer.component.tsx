import {maintenance} from "../../pages/misc/maintenance/maintenance.page.styles.tsx";

interface FooterComponentProps {
    page: string;
}

function FooterComponent({page}: FooterComponentProps) {

    return (
        <>
            {page === 'landing' &&
				<div className={maintenance.borderClass}>
					<div className={maintenance.containerClass}>
						<span className={maintenance.boldTextClass}>You can contact us:</span>
						<a href="#" className={maintenance.linkClass} target="_blank" title="Email">
							<svg xmlns="http://www.w3.org/2000/svg"
							     className={maintenance.svgClass}
							     viewBox="0 0 20 20"
							     fill="currentColor">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
							</svg>
							<span>teamclubroom@gmail.com</span>
						</a>
					</div>
				</div>
            }
        </>
    );
}

export default FooterComponent;