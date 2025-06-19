// pages/api/search.js
export default async function handler(req, res) {
	const { q } = req.query; // Extract the search keyword from the query
  
	if (!q) {
	  return res.status(400).json({ error: 'Search keyword is required' });
	}
  
	try {
	  // Fetch posts from WordPress backend
	  const response = await fetch(
		`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts?search=${encodeURIComponent(q)}`
	  );
	  const data = await response.json();
	  res.status(200).json(data);
	} catch (error) {
	  console.error('Error fetching search results:', error);
	  res.status(500).json({ error: 'Failed to fetch search results' });
	}
  }