import Link from 'next/link';

const RelatedArticle = ({ relatedPosts }) => {
  return (
	<div className="widget recent_news_widget">
      <h4 className="c_head">Related Articles</h4>
      <hr />
      {relatedPosts.length > 0 ? (
        <div className="media recent_post_item">
          <div className="media-body">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/${post.slug}`} legacyBehavior>
                <a>
                  <h5>{post.title}</h5>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p>No related articles found.</p>
      )}
    </div>
  );
};

export default RelatedArticle;