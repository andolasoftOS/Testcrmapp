import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

// GraphQL Query to Fetch Content You May Like Data
const GET_CONTENT_YOU_LIKE = gql`
  query contentYouLike {
    pages {
      nodes {
        contentYouLike {
          cards {
            cymlTitle
            cymlDescription
            cymlIcon {
              node {
                sourceUrl
              }
            }
            cymlLink {
              target
              title
              url
            }
          }
        }
      }
    }
  }
`;

const ThemeDocumentationSection = () => {
  // Fetch data using Apollo Client
  const { data, loading, error } = useQuery(GET_CONTENT_YOU_LIKE);

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle errors
  if (error) return <div>Error loading content: {error.message}</div>;

  // Extract dynamic data
  const contentCards = data?.pages?.nodes[0]?.contentYouLike?.cards || [];

  return (
    <section className="theme_doc_area bg_color sec_pad">
      <div className="container">
        {/* Section Title */}
        <div className="section_title text-center">
          <h2 className="h_title wow fadeInUp">Content You May Like</h2>
          {/* <p className="wow fadeInUp" data-wow-delay="0.2s">
            Discover recommended articles, guides, and insights tailored to your interests.
          </p> */}
        </div>
        {/* Documentation Items */}
        <div className="row">
          {contentCards.map((card, index) => (
            <div key={index} className="col-lg-6 col-sm-6 col-12">
              <div
                className="media theme_doc_item wow fadeInUp"
                data-wow-delay={`${(index % 3) * 0.2}s`}
              >
                {/* Dynamic Icon */}
                <img
                  src={card.cymlIcon?.node?.sourceUrl || '/images/default-icon.png'} // Use direct URL
                  alt={card.cymlTitle || 'Card Icon'}
                  width={50}
                  height={50}
                />
                <div className="media-body">
                  {/* Dynamic Title */}
                  <Link href={card.cymlLink?.url || '#'} target={card.cymlLink?.target || '_self'}>
                    <h4 className="c_head">{card.cymlTitle || 'Untitled'}</h4>
                  </Link>
                  {/* Dynamic Description */}
                  <p>{card.cymlDescription || 'No description available.'}</p>
                  {/* Dynamic Button */}
                  <Link href={card.cymlLink?.url || '#'} target={card.cymlLink?.target || '_self'}>
                    <button className="cyml-btn">{card.cymlLink?.title || 'Read More'}</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeDocumentationSection;