import Link from 'next/link';

const LastViewedArticle = () => {
  // Fetch the last viewed posts from localStorage
  const viewedPosts = JSON.parse(localStorage.getItem('viewedPosts')) || [];

  return (
    <div className="widget recent_news_widget">
      {/* Widget Title */}
      <h4 className="c_head">Last Viewed Articles</h4>
      <hr />
      {/* Last Viewed Articles List */}
      {viewedPosts.length > 0 ? (
        <div className="media recent_post_item">
          {viewedPosts.map((post) => (
            <Link key={post.id} href={`/${post.slug}`} legacyBehavior>
              <a>
                <i className="icon_circle-slelected"></i>
                <h5>{post.title}</h5>
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <p>No articles viewed yet.</p>
      )}
    </div>
  );
};

export default LastViewedArticle;