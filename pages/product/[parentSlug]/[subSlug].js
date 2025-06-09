import DocBanner from '../../../components/DocBanner';
import SubCategorySection from  '../../../components/SubCategorySection';

import getSubCategoriesByParentSlug from '../../../query/getSubCategoriesByParentSlug';
import getCategorySeoBySlug from '../../../query/getCategorySeoBySlug'; 

export default function SubSubCategoryPage({ category, seo, subSlug }) {

  return (
    <>

      <DocBanner />

      <SubCategorySection category={category} subSlug={subSlug} />
      
    </>
  );
};

export async function getStaticProps({ params }) {
    const { subSlug } = params;
    const category = await getSubCategoriesByParentSlug(subSlug);
    const seoData = await getCategorySeoBySlug(subSlug);
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
    if (!category) {
      return { notFound: true };
    }
  
    return {
      props: {
        category,
        seo,
        subSlug,
      },
      revalidate: 10,
    };
  }
  
  // 👇 Define paths or allow dynamic fallback
  export async function getStaticPaths() {
    return {
      paths: [], // You can optionally pre-build paths if needed
      fallback: 'blocking', // This allows dynamic build on first request
    };
  }