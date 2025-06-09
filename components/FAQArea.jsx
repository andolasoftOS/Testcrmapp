import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

// GraphQL Query to Fetch FAQs
const GET_FAQS = gql`
  query faqdata {
    pages {
      nodes {
        faqdata {
          parentItem {
            childItem {
              childAnswer
              childQuestion
              answerListParent {
                answerList
              }
            }
            parentText
            parentIcon {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

const FAQArea = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Fetch FAQs using Apollo Client
  const { data, loading, error } = useQuery(GET_FAQS);

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle errors
  if (error) return <div>Error loading FAQs: {error.message}</div>;

  // Extract FAQ data with fallback for missing data
  const faqData = data?.pages?.nodes[0]?.faqdata?.parentItem || [];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="doc_faq_area_two sec_pad">
      <div className="container">
        {/* Section Title */}
        <div className="section_title text-center">
          <h2 className="h_title wow fadeInUp">Frequently Asked Questions</h2>
          {/* <p className="wow fadeInUp" data-wow-delay="0.2s">
            Some dodgy chav bevvy amongst argy-bargy spiffing absolutely bladdered nancy boy cup of tea a load of old tosh porkies.
          </p> */}
        </div>
        <div className="row">
          {/* Quick Navigation */}
          <div className="col-lg-4 col-md-5">
            <div className="fact_navigation_info">
              <h4 className="c_head">Quick Navigation</h4>
              <ul className="nav nav-tabs fact_navigation" id="myTab" role="tablist">
                {faqData.map((parent, index) => (
                  <li key={parent.parentText} className="nav-item">
                    <a
                      className={`nav-link ${activeTab === index ? 'active' : ''}`}
                      id={`${parent.parentText?.replace(/\s+/g, '-')}-tab`}
                      data-toggle="tab"
                      href={`#${parent.parentText?.replace(/\s+/g, '-')}`}
                      role="tab"
                      aria-controls={parent.parentText?.replace(/\s+/g, '-')}
                      aria-selected={activeTab === index}
                      onClick={() => handleTabClick(index)}
                    >
                      <img
                        src={parent.parentIcon?.node?.sourceUrl || '/images/default-icon.png'}
                        alt={parent.parentText || 'Tab Icon'}
                      />
                      {parent.parentText || 'Untitled Tab'}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* FAQ Content */}
          <div className="col-lg-8 col-md-7">
            <div className="tab-content pl_70" id="myTabContent">
              {faqData.map((parent, index) => (
                <div
                  key={parent.parentText}
                  className={`tab-pane faq_tab_pane fade ${activeTab === index ? 'show active' : ''}`}
                  id={parent.parentText?.replace(/\s+/g, '-')}
                  role="tabpanel"
                  aria-labelledby={`${parent.parentText?.replace(/\s+/g, '-')}-tab`}
                >
                  <div className="accordion doc_faq_info" id={`accordionExample${index}`}>
                    {parent.childItem?.map((child, childIndex) => (
                      <div key={child.childQuestion || `child-${childIndex}`} className="card wow fadeInUp">
                        {/* FAQ Header */}
                        <div className="card-header" id={`heading${index}-${childIndex}`}>
                          <h2 className="mb-0">
                            <button
                              className={`btn btn-link ${childIndex === 0 ? '' : 'collapsed'}`}
                              type="button"
                              data-toggle="collapse"
                              data-target={`#collapse${index}-${childIndex}`}
                              aria-expanded={childIndex === 0}
                              aria-controls={`collapse${index}-${childIndex}`}
                            >
                              {child.childQuestion || 'Untitled Question'}
                              <i className="icon_plus"></i>
                              <i className="icon_minus-06"></i>
                            </button>
                          </h2>
                        </div>
                        {/* FAQ Body */}
                        <div
                          id={`collapse${index}-${childIndex}`}
                          className={`collapse ${childIndex === 0 ? 'show' : ''}`}
                          aria-labelledby={`heading${index}-${childIndex}`}
                          data-parent={`#accordionExample${index}`}
                        >
                          <div className="card-body">
                            {child.childAnswer && <p>{child.childAnswer}</p>}
                            {child.answerListParent?.length > 0 && (
                              <ul>
                                {child.answerListParent.map((item, listIndex) => (
                                  <li key={listIndex}>{item.answerList || 'No details available.'}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQArea;