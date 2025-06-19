import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const DocBanner = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the search page with the keyword in the URL
      router.push(`/search?s=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="doc_banner_area_two">
      {/* Parallax elements */}
      <div className="b_plus one" data-parallax='{"x": 250, "y": 160, "rotateZ": 500}'>
        <img src="/images/plus.png" alt="Plus Icon" width={50} height={50} />
      </div>
      <div className="b_plus two" data-parallax='{"x": 250, "y": 260, "rotateZ": 500}'>
        <img src="/images/plus_one.png" alt="Plus Icon" width={50} height={50} />
      </div>
      <div className="b_round r_one" data-parallax='{"x": 0, "y": 100, "rotateZ": 0}'></div>
      <div className="b_round r_two" data-parallax='{"x": -10, "y": 80, "rotateY": 0}'></div>
      <div className="b_round r_three"></div>
      <div className="b_round r_four"></div>

      {/* Images with absolute positioning */}
      <div className="p_absolute building_img">
        <img src="/images/new/banner-middle.svg" alt="Building"/>
      </div>
      <div className="p_absolute table_img wow fadeInLeft">
        <img src="/images/new/banner-left.svg" alt="Table"/>
      </div>
      {/* <div className="p_absolute flower wow fadeInUp" data-wow-delay="0.6s">
        <Image src="/images/flower.png" alt="Flower" />
      </div> */}
      <div className="p_absolute bord wow fadeInRight" data-wow-delay="0.4s">
        <img src="/images/new/banner-right.svg" alt="Bord"/>
      </div>
      {/* <div className="p_absolute girl wow fadeInRight" data-wow-delay="0.8s">
        <Image src="/images/girl.png" alt="Girl" />
      </div> */}

      <div className="container">
        <div className="doc_banner_text_two text-center">
          <h2>whattype can we help?</h2>
          <p>Everything you need to know about Orangescrum in one place</p>
          <form onSubmit={handleSearch} className="banner_search_form">
            <input
              type="search"
              name="q"
              className="form-control"
              placeholder="Search the Knowledge Base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search_btn">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DocBanner;
