import DocBanner from '../components/DocBanner';
import DynamicCategoriesCard from '../components/DynamicCategoriesCard';
import FunFactSection from '../components/FunFactSection';
import ThemeDocumentationSection from '../components/ThemeDocumentationSection';
import FAQArea from '../components/FAQArea';
import DocActionArea from '../components/DocActionArea';

import getSinglePage from '../query/single-page';
import getParentCategories from '../query/getParentCategories';

export default function Home({ page, seo, parentCategories}) {



  return (

<div>
      <DocBanner /> 

      <DynamicCategoriesCard categories={parentCategories} />      

      <FunFactSection />
      
      <ThemeDocumentationSection />

      <FAQArea />

      <DocActionArea />
</div>

  );
};

export async function getStaticProps() {
  const page = await getSinglePage('/home'); // Replace with your actual slug
  // Log the full response to see the structure of the data
  //console.log('Page data:', page);
  const parentCategories = await getParentCategories();
  const seo = page?.seo
    ? {
        opengraphTitle: page.seo.opengraphTitle || null,
        opengraphDescription: page.seo.opengraphDescription || null,
        opengraphImage: page.seo.opengraphImage ? page.seo.opengraphImage.mediaItemUrl : null,
        hideNavbar:true,
      }
    : {
        opengraphTitle: null,
        opengraphDescription: null,
        opengraphImage: null,
        hideNavbar:true,
      };

  return {
    props: {
      page,
      seo,
      parentCategories,
    },
  };
}