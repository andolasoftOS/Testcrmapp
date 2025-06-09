import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

// GraphQL Query
const GET_CATEGORIES_WITH_POSTS = gql`
  query GetCategoriesWithPosts {
    categories {
      nodes {
        id
        name
        slug
        posts {
          nodes {
            id
            title
            slug
          }
        }
      }
    }
  }
`;

const CategorySection = () => {
  // Fetch data using Apollo Client
  const { data, loading, error } = useQuery(GET_CATEGORIES_WITH_POSTS, {
    fetchPolicy: 'network-only', // Ensure fresh data is fetched
    notifyOnNetworkStatusChange: true,
  });

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle errors
  if (error) return <div>Error loading categories: {error.message}</div>;

  // Handle empty data
  if (!data || !data.categories || data.categories.nodes.length === 0) {
    return <div>No categories found</div>;
  }

  // Extract categories
  const categories = data.categories.nodes;

  return (
    <section className="doc_categories_guide_area sec_pad">
      <style jsx>{`
        .categories_guide_item {
          padding: 25px 25px;
          box-shadow: 1px 1px 6px 0 rgb(4 73 89 / 24%);
        }
        .categories_guide_item .doc_tag_title h4 {
          background: #f4f7f7;
          border-radius: 5px;
          padding: 10px 20px;
        }
        .categories_guide_item:hover {
          background: #f4f7f7;
          box-shadow: 1px 1px 6px 0 rgb(4 73 89 / 24%);
          transition: all 0.4s ease-in-out;
        }
        .categories_guide_item:hover .tag_list li a {
          color: #000;
        }
        .categories_guide_item:hover .doc_tag_title h4 {
          background: #fff !important;
          color: #000;
        }
        .tag_list li a {
          font-size: 17px;
          font-weight: 500;
        }
        .tag_list li a:hover {
            color: #10b3d6 !important;
        }
        .sec_pad {
          padding: 50px 0;
        }
      `}</style>
      <div className="container">
        <div className="section_title text-center">
          <h2 className="h_title">Categories</h2>
        </div>

        <div className="row">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div className="col-lg-12 col-sm-12 col-12" key={category.id}>
                <div className="categories_guide_item">
                  <div className="doc_tag_title">
                    <h4>{category.name}</h4>
                  </div>
                  <ul className="list-unstyled tag_list" style={{ marginBottom: 0 }}>
                    {category.posts.nodes.length > 0 ? (
                      category.posts.nodes.map((post) => (
                        <li key={post.id}>
                          <Link href={`/${post.slug}`} legacyBehavior>
                            <a>
                              <i className="icon_circle-slelected"></i> {post.title}
                            </a>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>No posts found for this category.</li>
                    )}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div>No categories found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;