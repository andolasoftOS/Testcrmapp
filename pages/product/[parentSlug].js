import DocBanner from '../../components/DocBanner';
import BrowseTopicsSubcat from '../../components/BrowseTopicsSubcat';
import FunFactSection from '../../components/FunFactSection';
import ThemeDocumentationSection from '../../components/ThemeDocumentationSection';
import FAQArea from '../../components/FAQArea';
import DocActionArea from '../../components/DocActionArea';

import getCategorySeoBySlug from '../../query/getCategorySeoBySlug'; // Add this import for SEO details
import getAllCategories from '../../query/getAllCategories';
import getSubCategoriesByParentSlug from '../../query/getSubCategoriesByParentSlug';

export default function CategoryPage({ subcategories, categorySlug, seo }) {

  return (
    <>
      <div>
        <DocBanner />

        <BrowseTopicsSubcat subcategories={subcategories} categorySlug={categorySlug} />

        <FunFactSection />
        
        <ThemeDocumentationSection />

        <FAQArea />

        <DocActionArea />
      </div>      
    </>
  );
};

export async function getStaticPaths() {
  const categories = await getAllCategories(); // Fetch all categories slugs dynamically

  const paths = categories.map((category) => ({
    params: { parentSlug: category.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
export async function getStaticProps({ params }) {
  const { parentSlug } = params;

  const subcategories = await getSubCategoriesByParentSlug(parentSlug);
  
  const seoData = await getCategorySeoBySlug(parentSlug);

  const seo = seoData
    ? {
        opengraphTitle: seoData.opengraphTitle || seoData.title || null,
        opengraphDescription: seoData.opengraphDescription || seoData.metaDesc || null,
        opengraphImage: seoData.opengraphImage ? seoData.opengraphImage.mediaItemUrl : null,
        hideNavbar: true,
      }
    : {
        opengraphTitle: null,
        opengraphDescription: null,
        opengraphImage: null,
        hideNavbar: true,
      };

  return {
    props: {
      subcategories,
      categorySlug: parentSlug,
      seo,
    },
  };
}