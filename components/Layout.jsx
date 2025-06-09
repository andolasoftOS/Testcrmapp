import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Scripts from './Scripts';

const Layout = ({ children, seo }) => {
  return (
    <div>
      <Head>
        <title>Orangescrum Helpdesk</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="https://helpdesk-backend.andolasoft.co.in/wp-content/uploads/2023/09/os-favicon.png" />
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/animate.css" />
        <link rel="stylesheet" href="/styles/style_1.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
      </Head>
      <Navbar />
      {children}
      <Footer />
	  <Scripts />
    </div>
  );
};

export default Layout;