import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';

// GraphQL query to search posts by title
const SEARCH_POSTS = gql`
  query SearchPosts($keyword: String!) {
    posts(where: { search: $keyword }, first: 1000) {
      nodes {
        id
        title
        slug
      }
    }
  }
`;

const SearchPage = () => {
  const router = useRouter();
  const { s } = router.query; // Extract the search keyword from the URL
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, loading, error } = useQuery(SEARCH_POSTS, {
    variables: { keyword: s },
    skip: !s, // Skip the query if no keyword is provided
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const searchResults = data?.posts?.nodes || [];
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
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
        .section_title {
          margin: 90px 0 35px 0;
        }
        .pagination {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 20px 0;
          float: left;
        }
        .pagination li {
          margin: 0 5px;
        }
        .pagination button {
          padding: 8px 16px;
          border: 1px solid #ddd;
          background-color: #fff;
          cursor: pointer;
          border-radius: 5px;
        }
        .pagination button:hover {
          background-color: #f4f7f7;
        }
        .pagination button.active {
          background-color: #10b3d6;
          color: white;
          border-color: #10b3d6;
        }
      `}
      </style>
      <div className="container">
        <div className="section_title text-center">
          <h2 className="h_title">Search Results for: {s}</h2>
        </div>

        <div className="row">
          {searchResults.length > 0 ? (
            <div className="col-lg-12 col-sm-12 col-12">
              <div className="categories_guide_item">
                <div className="doc_tag_title">
                  <ul className="list-unstyled tag_list" style={{ marginBottom: 0 }}>
                    {currentItems.map((post) => (
                      <li key={post.id}>
                        <h4> 
                          <Link href={`/${post.slug}`} legacyBehavior>
                            <a>
                              <i className="icon_circle-slelected"></i>{post.title}
                            </a>
                          </Link>
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {totalPages > 1 && (
                <ul className="pagination">
                  <li>
                    <button 
                      onClick={() => paginate(currentPage - 1)} 
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                      <button
                        className={currentPage === index + 1 ? 'active' : ''}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button 
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </div>        
      </div>
    </section>
    </>
  );
};

export default SearchPage;