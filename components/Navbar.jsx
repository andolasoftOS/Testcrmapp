import Link from 'next/link';

const Navbar = ({menuItems}) => {

  return (
    <nav className="navbar navbar-expand-lg menu_two" id="sticky">
      <div className="container">
        <Link href="/" legacyBehavior>
			<a className="navbar-brand d-flex">
				<img src="https://helpdesk-backend.andolasoft.co.in/wp-content/uploads/2025/02/os_helpcenter_4-1.png" alt="logo" />
          	</a>
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="menu_toggle">
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="hamburger-cross">
              <span></span>
              <span></span>
            </span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav menu dk_menu ml-auto">
            <li className="nav-item dropdown submenu active">
              <Link href="/" legacyBehavior>
                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
              </Link>
              <i className="arrow_carrot-down_alt2 mobile_dropdown_icon" aria-hidden="true" data-toggle="dropdown"></i>
            </li>

			<li className="nav-item dropdown submenu">
				<Link href="javascript:void(0);" legacyBehavior>
					<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Products 
					</a>
				</Link>
				<i className="arrow_carrot-down" aria-hidden="false" data-toggle="dropdown"></i>
				<ul className="dropdown-menu dropdown_menu_two">
					<ul>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/pricing" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Orangescrum Cloud</h5>
										<p>Flexible cloud for <br /> all businesses  </p>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/self-hosted" legacyBehavior >
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>On-premises</h5>
										<p>Self-hosted solution <br /> with full control. </p>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/data-center" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>Private cloud</h5>
										<p>Dedicated, secure cloud <br /> infrastructure </p>
									</div>
								</a>
							</Link>
						</li>
					</ul>

					<ul>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/oconstruction" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>OConstruction</h5>
										<p>Construction project <br /> management software.</p>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/open-source-project-management-software" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>Open-source Edition</h5>
										<p>Cost-effective, for smaller teams.</p>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/crm" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>Orangescrum CRM</h5>
										<p>CRM with project <br /> management integration </p>
									</div>
								</a>
							</Link>
						</li>
					</ul>

					<ul>
						<li className="nav-item">
							<Link href="https://helpdesk.orangescrum.com" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>HelpCentre</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/securities" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Security</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/channel-partner" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Partners</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/customers" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Customers</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://academy.orangescrum.com/" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Orangescrum Academy</h5>
									</div>
								</a>
							</Link>
						</li>
					</ul>

				</ul>

			</li>

			<li className="nav-item dropdown submenu">
				<Link href="javascript:void(0);" legacyBehavior>
					<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Solutions 
					</a>
				</Link>
				<i className="arrow_carrot-down" aria-hidden="false" data-toggle="dropdown"></i>
				<ul className="dropdown-menu dropdown_menu_two">
					<ul>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/#tab-2" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>By Industries</h5>
										<p>Solutions designed for <br /> specific industries</p>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/#tab-3" legacyBehavior >
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>By Teams</h5>
										<p>Tailored for diverse teams <br /> and functions.</p>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/#tab-1" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>By Operation</h5>
										<p>Optimize processes across <br /> business operations</p>
									</div>
								</a>
							</Link>
						</li>
					</ul>

					<ul>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/project-management-software-for-government-industry" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Government Industry</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/healthcare" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>Healthcare</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/education" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>Education</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/insurance" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Insurance</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/human-resource" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Human Resource</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/lifestyle" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>LifeStyle</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/project-management-software-for-transportation-and-logistics-industry" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Transportation & Logistics</h5>
									</div>
								</a>
							</Link>
						</li>
					</ul>

					<ul>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/project-management-software-for-banking-and-finance" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Banking & Finance</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/project-management-software-for-ngo" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Non Profit Organization</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/project-management-software-for-pharmaceutical-industry" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Pharmaceutical Industry</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/construction-project-management-software" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Construction Project Management Software</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/professional-service-project-management" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Professional Services</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/project-management-software-for-retail-and-ecommerce-industry" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Retail & eCommerce</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/solutions/project-management-software-for-tourism-and-hospitality-industry" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Tourism & Hospitality</h5>
									</div>
								</a>
							</Link>
						</li>

					</ul>

				</ul>

			</li>

			<li className="nav-item dropdown submenu">
				<Link href="javascript:void(0);" legacyBehavior>
					<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Features 
					</a>
				</Link>
				<i className="arrow_carrot-down" aria-hidden="false" data-toggle="dropdown"></i>
				<ul className="dropdown-menu dropdown_menu_two">
					<ul>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/agile-project-management" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Agile Project Management</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/resource-management" legacyBehavior >
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>Resource Management</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/time-tracking" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>Time Tracking</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/gantt-chart" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Gantt Chart</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/task-management" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Task Management</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/project-reports-analytics" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>Reports & Analytics</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/user-role-management" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>User Role Management</h5>
									</div>
								</a>
							</Link>
						</li>
					</ul>

					<ul>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/all-in-one-project-management-dashboard" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>All-in-one Project Dashboard</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/kanban-board" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>Kanban Board</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/mention" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>@mention</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/custom-fields" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Custom Fields</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/integrations" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Integrations</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/ticketing-software" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Ticket Management</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/test-case-management" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Test Case Management</h5>
									</div>
								</a>
							</Link>
						</li>
					</ul>

					<ul>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/project-calendar" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Project Calendar</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/bug-and-issue-tracking" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Bug and Issue Tracking</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/workload-management-software" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Workload Management</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/wiki-management" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Wiki Management</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/project-template" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Project Templates</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/invoice-how-it-works" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Invoice</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/budget-and-cost-management" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Budget and Cost</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/scale-agile-project-management" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Scale Agile</h5>
									</div>
								</a>
							</Link>
						</li>

					</ul>

				</ul>

			</li>

			<li className="nav-item dropdown submenu">
				<Link href="javascript:void(0);" legacyBehavior>
					<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Resources 
					</a>
				</Link>
				<i className="arrow_carrot-down" aria-hidden="false" data-toggle="dropdown"></i>
				<ul className="dropdown-menu dropdown_menu_two">
					<ul>
						<li className="nav-item">
							<Link href="https://blog.orangescrum.com/ebook" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>eBook</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/news-room" legacyBehavior >
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>News Room</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://helpdesk.orangescrum.com" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>Support</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/project-template" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Template</h5>
									</div>
								</a>
							</Link>
						</li>
					</ul>

					<ul>
						<li className="nav-item">
							<Link href="https://blog.orangescrum.com" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Blog</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/success-stories" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>Success Stories</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/product-videos" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>Videos</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/tutorial" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Tutorial</h5>
									</div>
								</a>
							</Link>
						</li>
					</ul>

					<ul>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/customers" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/tick.png" alt="" />
									<div className="text">
										<h5>Customers</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://www.orangescrum.com/build-vs-buy" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/sheet.png" alt="" />
									<div className="text">
										<h5>Build vs Buy</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://academy.orangescrum.com" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/shopping-bag.png" alt="" />
									<div className="text">
										<h5>Academy</h5>
									</div>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="https://jobboard.orangescrum.com" legacyBehavior>
								<a className="nav-link" target="_blank">
									<img src="/images/gear.png" alt="" />
									<div className="text">
										<h5>Job Board</h5>
									</div>
								</a>
							</Link>
						</li>
					</ul>

				</ul>

			</li>

			<li className="nav-item dropdown submenu">
				<Link href="https://www.orangescrum.com/self-hosted" legacyBehavior>
					<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Self-Hosted
					</a>
				</Link>
			</li>

			<li className="nav-item dropdown submenu">
              <Link href="https://www.orangescrum.com/pricing" legacyBehavior>
                <a className="nav-link dropdown-toggle" target="_blank" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pricing </a>
              </Link>
              <i className="arrow_carrot-down_alt2 mobile_dropdown_icon" aria-hidden="true" data-toggle="dropdown"></i>
            </li>

          </ul>
          {/* <Link href="/signin" legacyBehavior>
            <a className="nav_btn"><i className="icon_profile"></i>Log In</a>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;