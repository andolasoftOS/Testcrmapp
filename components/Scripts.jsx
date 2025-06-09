import Script from 'next/script';

const Scripts = () => {
  return (
    <>
      <Script src="/js/jquery-3.2.1.min.js" strategy="beforeInteractive" />
      <Script src="/js/pre-loader.js" strategy="beforeInteractive" />
      <Script src="/js/popper.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/js/parallaxie.js" strategy="lazyOnload" />
      <Script src="/js/TweenMax.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.wavify.js" strategy="lazyOnload" />
      <Script src="/js/wow.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
};

export default Scripts;