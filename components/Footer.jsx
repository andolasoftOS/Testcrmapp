import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer_area footer_p_top f_bg_color">
      {/* <img className="p_absolute leaf" src="/images/v.svg" alt="" /> */}
      <img className="p_absolute f_man wow fadeInLeft" data-wow-delay="0.4s" src="/images/new/footer-right.svg" alt="" />
      {/* <img className="p_absolute f_cloud" src="/images/cloud.png" alt="" /> */}
      {/* <img className="p_absolute f_email" src="/images/email-icon.png" alt="" /> */}
      {/* <img className="p_absolute f_email_two" src="/images/email-icon_two.png" alt="" /> */}
      <img className="p_absolute f_man_two wow fadeInLeft" data-wow-delay="0.2s" src="/images/new/footer-left.svg" alt="" />
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="f_widget subscribe_widget wow fadeInUp">
                <Link href="/" legacyBehavior>
                  <a className="f_logo d-flex">
                    <img src="https://helpdesk-backend.andolasoft.co.in/wp-content/uploads/2025/02/os_helpcenter_4-1.png" alt="" />
                  </a>
                </Link>
                {/* <h4 className="c_head">Subscribe to our newsletter</h4>
                <form action="#" className="footer_subscribe_form">
                  <input type="email" placeholder="Email" className="form-control" />
                  <button type="submit" className="s_btn">Send</button>
                </form> */}
                <ul className="list-unstyled f_social_icon">
                  <li><a href="https://www.facebook.com/OrangeScrum" target="_blank"><i className="social_facebook"></i></a></li>
                  <li><a href="https://twitter.com/theorangescrum"><i className="social_twitter" target="_blank"></i></a></li>
                  <li><a href="https://www.instagram.com/orangescrum"><i className="social_vimeo" target="_blank"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/the-orangescrum"><i className="social_instagram" target="_blank"></i></a></li>
                </ul>

                <Link href="https://www.orangescrum.com/contact-sales" legacyBehavior>
                  <a className="bftr-contact-btn" target="_blank">Contact Us</a>
                </Link>

              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12">
                <div className="f_widget link_widget wow fadeInUp" data-wow-delay="0.2s">
                    <h3 className="f_title">Features</h3>
                    <ul className="list-unstyled link_list">
                        <li><Link href="https://www.orangescrum.com/agile-project-management" legacyBehavior><a target="_blank">Agile Project Management</a></Link></li>
                        <li><Link href="https://www.orangescrum.com/task-management" legacyBehavior><a target="_blank">Task Management</a></Link></li>
                        <li><Link href="https://www.orangescrum.com/time-tracking" legacyBehavior><a target="_blank">Time Tracking</a></Link></li>
                        <li><Link href="https://www.orangescrum.com/project-management-software" legacyBehavior><a target="_blank">Project Management</a></Link></li>
                        <li><Link href="https://www.orangescrum.com/timesheet" legacyBehavior><a target="_blank">Timesheet Management</a></Link></li>
                        <li><Link href="https://www.orangescrum.com/resource-management" legacyBehavior><a target="_blank">Resource Management</a></Link></li>
                        <li><Link href="https://www.orangescrum.com/workload-management-software" legacyBehavior><a target="_blank">Workload Management</a></Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12">
                <div className="f_widget link_widget wow fadeInUp" data-wow-delay="0.6s">
                    <h3 className="f_title">Solutions</h3>
                    <ul className="list-unstyled link_list">
                      <li><Link href="https://www.orangescrum.com/solutions/it-project-management-software" legacyBehavior><a target="_blank">IT Teams</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/solutions/marketing-project-management-software" legacyBehavior><a target="_blank">Marketing Teams</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/remote-team-management" legacyBehavior><a target="_blank">Remote Team</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/agency-project-management" legacyBehavior><a target="_blank">Creative Teams</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/solutions/professional-services-management" legacyBehavior><a target="_blank">Professional Services Mgmt</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/product-management-software" legacyBehavior><a target="_blank">Product Management</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/work-management-software" legacyBehavior><a target="_blank">Work Management</a></Link></li>                
                    </ul>
                </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6 col-12">
                <div className="f_widget link_widget wow fadeInUp" data-wow-delay="0.4s">
                    <h3 className="f_title">Resources</h3>
                    <ul className="list-unstyled link_list">
                        <li><Link href="#" legacyBehavior><a>Blog</a></Link></li>
                        <li><Link href="#" legacyBehavior><a>FAQS</a></Link></li>
                        <li><Link href="#" legacyBehavior><a>Videos</a></Link></li>
                        <li><Link href="#" legacyBehavior><a>eBooks</a></Link></li>
                        <li><Link href="#" legacyBehavior><a>Tutorial</a></Link></li>
                        <li><Link href="#" legacyBehavior><a>Media Kit</a></Link></li>
                        <li><Link href="#" legacyBehavior><a>Help Desk</a></Link></li>
                        <li><Link href="#" legacyBehavior><a>Success Story</a></Link></li>                    
                    </ul>
                </div>
            </div> */}

            {/* <div className="col-lg-3 col-sm-6 col-12">
                <div className="f_widget link_widget wow fadeInUp" data-wow-delay="0.6s">
                    <h3 className="f_title">Company</h3>
                    <ul className="list-unstyled link_list">
                      <li><Link href="#" legacyBehavior><a>About Us</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Contact Support</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Contact Sales</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Cloud Pricing</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Self-hosted Pricing</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Why Use Orangescrum</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>What's New</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Security</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Schedule Demo</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Product Updates</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Free Data Migration</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Compare Orangescrum</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Orangescrum Open-source</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Channel Partner</a></Link></li>
                      <li><Link href="#" legacyBehavior><a>Deals</a></Link></li>                    
                    </ul>
                </div>
            </div> */}

            <div className="col-lg-2 col-sm-6 col-12">
                <div className="f_widget link_widget wow fadeInUp" data-wow-delay="0.6s">
                    <h3 className="f_title">Alternative</h3>
                    <ul className="list-unstyled link_list">
                      <li><Link href="https://www.orangescrum.com/best-asana-alternative" legacyBehavior><a target="_blank">Asana Alternative</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/best-jira-alternative" legacyBehavior><a target="_blank">Jira Alternative</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/best-wrike-alternative" legacyBehavior><a target="_blank">Wrike Alternative</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/best-monday-alternative" legacyBehavior><a target="_blank">Monday Alternative</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/best-google-tasks-alternative" legacyBehavior><a target="_blank">Google Tasks Alternative</a></Link></li>
                      <li><Link href="https://www.orangescrum.com/best-clickup-alternative" legacyBehavior><a target="_blank">Clickup Alternative</a></Link></li>
                    </ul>
                </div>
            </div>

          </div>
          <div className="border_bottom"></div>
        </div>
      </div>
      <div className="footer_bottom text-center">
        <div className="container">
          <p>© {new Date().getFullYear()} All Rights Reserved by <Link href="/" legacyBehavior><a>Orangescrum</a></Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;