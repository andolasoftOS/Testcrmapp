import Image from 'next/image';
import Link from 'next/link';

const DocActionArea = () => {
  return (
    <section className="doc_action_area_two">
      <div className="container">
        <div className="doc_action_info mt_130">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="media wow fadeInLeft">
                {/* <Image
                  src="/images/Internet.png"
                  alt=""
                  width={50}
                  height={50}
                /> */}
                <div className="media-body">
                  <h2 className="h_title">Get Started with Orangescrum Today!</h2>
                  <p>Follow our guides to set up and optimize your workflow.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 wow fadeInRight">
              <Link href="https://www.orangescrum.com/contact-sales" className="action_btn">
                Contact Sales <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocActionArea;