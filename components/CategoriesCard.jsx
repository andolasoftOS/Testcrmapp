const CategoriesCard = () => {

  return (
   <section className="cat-new-card">
    <div className="container">
      <div className="row">
        <div className="col-12"><h2>Explore by product</h2></div>
        <div className="col-md-4 col-12">
          <div className="cat-card">
            <div className="card-head">
              <img src="https://stag-oshelpdesk.andolasoft.co.in/wp-content/uploads/2025/05/agile_logo.svg" alt="" />
            </div>
            <p>Explore the cloud product categories.</p>
            <a href="/agile" className="card-btn">Explore</a>
          </div>
        </div>

        <div className="col-md-4 col-12">
          <div className="cat-card">
            <div className="card-head">
              <img src="https://stag-oshelpdesk.andolasoft.co.in/wp-content/uploads/2025/05/os-work.svg" alt="" />
            </div>
            <p>Explore the cloud product categories.</p>
            <a href="/work" className="card-btn">Explore</a>
          </div>
        </div>

        <div className="col-md-4 col-12">
          <div className="cat-card">
            <div className="card-head">
              <img src="https://stag-oshelpdesk.andolasoft.co.in/wp-content/uploads/2025/05/CRM-Black.png" alt="" />
            </div>
            <p>Explore the CRM product categories.</p>
            <a href="/crm" className="card-btn">Explore</a>
          </div>
        </div>


      </div>
    </div>
   </section>
  );
};

export default CategoriesCard;