import BreadCumb from '../components/BreadCumb';
import BlogSingle from '../components/BlogSingle';
import RelatedArticle from '../components/RelatedArticle';
import AllCategories from '../components/AllCategories';

import getSinglePost from '../query/single-post';

const SinglePost = ({ post, slug }) => {
  const {
    title,
    content,
    date,
    featuredImage,
    comments,
    author,
    categories
  } = post.data.post;

  console.log('Posts:', post.data.post); // Debugging

  // Don't include the post title
const breadcrumbData = [];

// Category hierarchy logic (as you already have)
if (categories.nodes.length > 0) {
  const primaryCategory = categories.nodes[0];

  const buildCategoryHierarchy = (category) => {
    const hierarchy = [];
    let current = category;
    while (current) {
      hierarchy.unshift({
        name: current.name,
        slug: current.slug,
      });
      current = current.parent?.node || null;
    }
    return hierarchy;
  };

  const hierarchy = buildCategoryHierarchy(primaryCategory);
  let accumulatedSlug = '/product';

  breadcrumbData.push(
    ...hierarchy.map((cat) => {
      accumulatedSlug += `/${cat.slug}`;
      return {
        name: cat.name,
        slug: accumulatedSlug,
      };
    })
  );
}

const relatedPosts = Array.from(
  new Map(
    categories.nodes
      .flatMap((category) =>
        category.posts.nodes.filter((relatedPost) => relatedPost.id !== post.id)
      )
      .map((post) => [post.id, post]) // Use Map to remove duplicates by post ID
  ).values()
);

  return (
    <>
      <BreadCumb breadcrumbData={breadcrumbData} />
      <section className="blog_area">
        <div className="container">
          <div className="row">
            {/* Main Blog Content */}
            <div className="col-lg-8">
              <BlogSingle
                title={title}
                content={content}
                imageUrl={featuredImage?.node?.sourceUrl || null}
                imageAlt={featuredImage?.node?.altText || 'Post Image'}
                quoteText="He legged it that blatant brown bread some dodgy chav super a blinding shot my lady lavatory cup of char cor blimey guvnor get stuffed mate you mug cobblers off his nut pukka, give us a bell"
                quoteAuthor="Jason Response"
              />
            </div>  
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="blog_sidebar pl-40">
              
                <RelatedArticle relatedPosts={relatedPosts} />
                {/* <LastViewedArticle /> 
                <AllCategories />*/}
               
              </div>
            </div>          
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps({ query }) {
  console.log('Query Slug:', query.slug); // Debugging
  const post = await getSinglePost(query.slug);
  console.log('Post Data:', post); // Debugging

  const slug = query.slug;
  return {
    props: {
      post,
      slug: query.slug,
    },
  };
}

export default SinglePost;