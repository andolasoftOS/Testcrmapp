import Link from 'next/link';

const SubCategorySection = ({ category, subSlug }) => {
  if (!category || category.length === 0) {
    return <div>No category found.</div>;
  }

  return (
    <section className="doc_categories_guide_area sec_pad">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h2 className="h_title">Posts by Category</h2>
        </div>

        <div className="row">
          {category.map((category) => {
            const posts = category.posts?.nodes || [];

            return (
              <div className="col-lg-12 col-sm-12 col-12" key={category.id}>
                <div className="categories_guide_item mb-4">
                  <div className="doc_tag_title">
                    <h4>{category.name}</h4>
                  </div>

                  <ul className="list-unstyled tag_list" style={{ marginBottom: 0 }}>
                    {posts.length > 0 ? (
                      posts.map((post) => (
                        <li key={post.id}>
                          <Link href={`/${post.slug}`} legacyBehavior>
                            <a>
                              <i className="icon_circle-slelected"></i> {post.title}
                            </a>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>No posts found under this category.</li>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .categories_guide_item {
          padding: 25px;
          box-shadow: 1px 1px 6px 0 rgb(4 73 89 / 24%);
          border-radius: 5px;
          background: #f4f7f7;
        }
        .categories_guide_item:hover {
          background: #fff;
          transition: all 0.3s ease;
        }
        .doc_tag_title h4 {
          background: #fff;
          padding: 12px 20px;
          border-radius: 5px;
          font-size: 20px;
        }
        .tag_list li a {
          font-size: 17px;
          font-weight: 500;
          display: inline-block;
          margin: 8px 0;
        }
        .tag_list li a:hover {
          color: #10b3d6;
        }
        .sec_pad {
          padding: 50px 0;
        }
      `}</style>
    </section>
  );
};

export default SubCategorySection;
