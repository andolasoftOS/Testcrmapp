import Image from 'next/image';
import Link from 'next/link';

const BrowseTopicsSubcat = ({ subcategories, categorySlug }) => {

  return (
    <section className="doc_categories_guide_area sec_pad">
      <Image className="shap wow fadeInUp" src="/images/dow_bg_two.png" alt="Background Shape" width={1200} height={600} />


      <div className="container">
        <div className="section_title text-center">
          <h2 className="h_title wow fadeInUp">Browse Resources by Categories</h2>
        </div>

        <div className="row">
          {subcategories.map((cat, index) => {
            const descriptionParts = cat.description
              ? cat.description.split('|').map(part => part.trim())
              : [];

            const imageUrl = descriptionParts[0] || '/images/default-icon.svg';
            const textList = descriptionParts.slice(1);

            return (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="categories_guide_item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <Image
                    src={imageUrl}
                    alt={cat.name}
                    width={50}
                    height={50}
                  />
                  <div className="doc_tag_title">
                    <h4>{cat.name}</h4>
                  </div>
                  <ul className="list-unstyled tag_list">
                    {textList.map((text, i) => (
                      <li key={i}>
                        <i className="icon_check_alt2"></i> {text}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/product/${categorySlug}/${cat.slug}`} legacyBehavior>
                    <a className="doc_border_btn">Learn More<i className="arrow_right"></i></a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseTopicsSubcat;
