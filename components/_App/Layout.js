import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Scripts from '../../components/Scripts';

import generalSettingsData from '../../query/generalSettings/generalSettingsData';
import getPrimaryMenu from '../../query/primaryNavigationMenu';
import getMenusByIds from '../../query/getNavigationMenu';


const Layout = ({ children, seo, menuItems}) => {
  const navbarStat=seo.hideNavbar;

  const [generalData, setGeneralData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      const general = await generalSettingsData();

      setGeneralData(general.data.generalSettings);

    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{seo.opengraphTitle || generalData.title}</title>
        <meta name="description" content={seo.opengraphDescription || generalData.description} />
        {seo.opengraphImage && (
          <meta property="og:image" content={seo.opengraphImage} />
        )}
        <link href="/images/favicon.ico" type="image/x-icon" rel="icon" />
        <link href="/images/favicon.ico" type="image/x-icon" rel="shortcut icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/animate.css" />
        <link rel="stylesheet" href="/styles/style_1.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
      </Head>
      <Navbar menuItems={menuItems} />
      {children}      
      <Footer />
      <Scripts />
    </>
  );
};

export default Layout;
