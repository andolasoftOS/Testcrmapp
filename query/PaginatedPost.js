import getAllPosts from './posts';
import { getPostsPerPage } from './postsperpage';
import { getPagesCount } from './pagesCount';
import { sortStickyPosts } from './stickyPost';

export async function getPaginatedPosts(currentPage = 1) {
  const res = await getAllPosts();

  const posts = res.data.posts.edges;
  const postsPerPage = await getPostsPerPage();
  const pagesCount = await getPagesCount(posts, postsPerPage);

  let page = Number(currentPage);
  if (typeof page === 'undefined' || isNaN(page) || page > pagesCount) {
    page = 1;
  }

  const offset = postsPerPage * (page - 1);
  const sortedPosts = sortStickyPosts(posts);

  return {
    posts: sortedPosts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}
