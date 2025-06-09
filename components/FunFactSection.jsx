const FunFactSection = () => {
	return (
	  <section className="doc_fun_fact_area">
		{/* <div className="animated-waves">
		  <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="animated-wave">
			<title>Wave</title>
			<defs></defs>
			<path id="animated-wave-three" d=""></path>
		  </svg>
		  <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="animated-wave">
			<title>Wave</title>
			<defs></defs>
			<path id="animated-wave-four" d=""></path>
		  </svg>
		</div> */}
  
		<div className="container">
		  <div className="row">
			<div className="col-lg-4 col-md-4 col-sm-6 col-12 wow fadeInUp">
			  <div className="doc_fact_item ">
				<div className="counter-sec">
					<div className="counter">5000</div>
					<i className="icon_plus"></i>
				</div>				
				<p>Happy Customers</p>
			  </div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.2s">
			  <div className="doc_fact_item flex">
				<div className="counter-sec">
					<div className="counter">5000</div>
					<i className="icon_plus"></i>
				</div>
				<p>Cups of Coffee</p>
			  </div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
			  <div className="doc_fact_item flex">
				<div className="counter-sec">
					<div className="counter">5000</div>
					<i className="icon_plus"></i>
				</div>
				<p>Finished Projects</p>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	);
  };
  
  export default FunFactSection;