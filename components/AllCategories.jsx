import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

const AllCategories = () => {
  const { data, loading, error } = useQuery(GET_ALL_CATEGORIES, {
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories: {error.message}</div>;
  if (!data || !data.categories || data.categories.nodes.length === 0) {
    return <div>No categories found</div>;
  }

  const categories = data.categories.nodes;

  return (
    <div className="widget categorie_widget">
      {/* Widget Title */}
      <h4 className="c_head">Popular Categories</h4>
      <hr />

      {/* Categories List */}
      <ul className="list-unstyled categorie_list">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`}>
              {category.name} <span>({category.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCategories;