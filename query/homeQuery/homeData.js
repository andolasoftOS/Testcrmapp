import { gql } from '@apollo/client';
import { client } from '../config';

const getHomeData = async (slug) => {
  //console.log("Fetching data for slug:", slug);
  
  const getPage = await client.query({
    query: gql`
      query MyQuery($slug: ID!) {
        page(id: $slug, idType: URI) {
          homeBannerSection {
            bannerTitle
            bannerSubtitle
            bannerDescription
            hcta1Text
            hcta1Url
            hcta2Text
            hcta2Url
            bannerImage{
              sourceUrl
            }
            ratingImage{
              sourceUrl
            }
          }
          iconSection {
            iconItems {
              iconDescription
              iconImage{
                sourceUrl
              }
              iconTitle
            }
          }
          fullVideoSection {
            videoImage{
              sourceUrl
            }
            videoTitle
            videoUrl
          }
          iconSectionRightImage {
            irsectionTitle
            irsectionSubtitle
            irsectionHeading
            irsectionDescription
            irrightImage{
              sourceUrl
            }
            iriconItems {
              iriconDescription
              iriconImage{
                sourceUrl
              }
              iriconTitle
            }
            ircta1Text
            ircta1Url
            ircta2Text
            ircta2Url
          }
          iconSectionBorder {
            ibbsectionHeading
            ibbsectionTitle
            ibbsectionSubtitle
            ibbiconItems {
              iconTitle
              iconDescription
              iconImage{
              sourceUrl 
              }
            }
            ibbcta1Text
            ibbcta1Url
            ibbcta2Text
            ibbcta2Url
          }
          iconSectionLeftImage {
            ibsectionHeading
            ibsectionTitle
            ibsectionSubtitle
            ibsectionDescription
            ibrightImage{
              sourceUrl
            }
            ibiconItems {
              ibiconDescription
              ibiconImage{
                sourceUrl
              }
              ibiconTitle
            }
            ibcta1Text
            ibcta1Url
            ibcta2Text
            ibcta2Url
          }
          appSlider {
            appHeading
            appTitle
            appSubtitle
            appDescription
            appScreenSlides {              
                sourceUrl
            }
          }
          iconSectionLeftImage2 {
            ibsectionHeading2
            ibsectionTitle2
            ibsectionSubtitle2
            ibsectionDescription2
            ibrightImage2{
              sourceUrl
            }
            ibiconItems2 {
              ibiconTitle2
              ibiconDescription2
              ibiconImage2{
                sourceUrl
              }
            }
            ibcta1Text2
            ibcta1Url2
            ibcta2Text2
            ibcta2Url2
          }       
        
          seo {
            title
            metaDesc
            opengraphTitle
            opengraphDescription
            opengraphImage {
              mediaItemUrl
            }
          }
          title
          content
        }
      }
    `,
    variables: {
      slug,
    },
  });  
  return getPage.data.page;
};


export default getHomeData;
