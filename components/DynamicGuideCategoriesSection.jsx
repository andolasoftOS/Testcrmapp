// components/DocCategoriesGuide.js
import Image from 'next/image';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';
import { da } from 'date-fns/locale';

const GET_CATEGORIES = gql`
 query GetSubcategoriesOfCRM {
  categories(where: { slug: "crm" }) {
    nodes {
      children {
        nodes {
          id
          name
          slug
          description
        }
      }
    }
  }
}
`;

const DynamicCategoriesGuide = ({ cat }) => {
  
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  const categoryIcons = {
    0: { src: "/images/new/Getting-Started.svg", alt: "Getting Started", title: "Getting Started" },
    1: { src: "/images/new/using-rangescrum.svg", alt: "Using Orangescrum", title: "Using Orangescrum" },
    2: { src: "/images/new/Scrum-ethodology.svg", alt: "Scrum Methodology", title: "Scrum Methodology" },
    3: { src: "/images/new/reports.svg", alt: "Reports", title: "Reports" },
    4: { src: "/images/new/your_profile.svg", alt: "Your Profile", title: "Your Profile" }, 
    5: { src: "/images/new/Integrations.svg", alt: "Integrations", title: "Integrations" },
  };

  const categoryLists = {
    0: [
      { id: 1, title: "Learn the basics of Orangescrum"},
      { id: 2, title: "Kickstart your project and team"},
      { id: 3, title: "Initiate your progress"},
    ],
    1: [
      { id: 4, title: "Insight on projects & tasks"},
      { id: 5, title: "Insight on teams & Resources"},
      { id: 6, title: "Collaboration Benefits"},
    ],
    2: [
      { id: 7, title: "Join in community discussion"},
      { id: 8, title: "Engage with new strategies"},
      { id: 9, title: "Contribute to best practices"},
    ],
    3: [
      { id: 10, title: "Embrace agility"},
      { id: 11, title: "Optimize productivity"},
      { id: 12, title: "Visualize performance",},
    ],
    4: [
      { id: 13, title: "Track progress"},
      { id: 14, title: "Real-time information"},
      { id: 15, title: "Quantify results"},
    ],
    5: [
      { id: 16, title: "Personalized settings"},
      { id: 17, title: "Individualized adjustments"},
      { id: 18, title: "Optimize project workflow"},
    ],
  };

  return (
    <section className="doc_categories_guide_area sec_pad">
      <Image className="shap wow fadeInUp" src="/images/dow_bg_two.png" alt="Background Shape" width={1200} height={600} />

      <div className="container">
        <div className="section_title text-center">
          <h2 className="h_title wow fadeInUp">Browse Resources by Categories</h2>
          {/* <p className="wow fadeInUp" data-wow-delay="0.2s">
            Easily navigate through our categorized resources to find answers and insights in no time.
          </p> */}
        </div>

        <div className="row">
          {data.categories.nodes[0].children.nodes.map((catname, index) => {
            const descriptionParts = catname.description
              ? catname.description.split('|').map(part => part.trim())
              : [];

            return (
            
          // {data.categories.nodes.map((category, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="categories_guide_item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <Image src={descriptionParts[0]} alt={categoryIcons[index].alt} width={50} height={50} />
                <div className="doc_tag_title">
                  <h4>{catname.name}</h4>                  
                </div>
                <ul className="list-unstyled tag_list">
                  {descriptionParts.slice(1).map((text, i) => (
                    <li key={i}>
                      <i className="icon_check_alt2"></i> {text}
                    </li>
                  ))}
                </ul>
                {/* <Link href={`/subcategory?category=${category.slug}`} legacyBehavior>
                  <a className="doc_border_btn">Learn More<i className="arrow_right"></i></a>
                </Link> */}
                <Link href={`/agile/cloud-category/${catname.slug}`} legacyBehavior>
                  <a className="doc_border_btn">Learn More<i className="arrow_right"></i></a>
                </Link>  
              </div>
            </div>
            );
          })}
        </div>

        {/* <div className="text-center">
          <Link href="/categories" legacyBehavior>
            <a className="doc_border_btn all_doc_btn wow fadeInUp">View All Docs<i className="arrow_right"></i></a>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default DynamicCategoriesGuide;