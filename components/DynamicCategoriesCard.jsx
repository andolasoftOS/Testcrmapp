const DynamicCategoriesCard = ({ categories }) => {
  return (
    <section className="cat-new-card">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Explore by product</h2>
          </div>

          {categories.map((category) => {
            const [imageUrl, descriptionText] = category.description
              ? category.description.split('|')
              : [null, 'Explore this product category.'];

            return (
              <div className="col-md-4 col-12 mb-4" key={category.id}>
                <div className="cat-card">
                  <div className="card-head">
                    <img
                      src={imageUrl || "https://via.placeholder.com/150x100?text=No+Image"}
                      alt={category.name}
                    />
                  </div>
                  <p>{descriptionText?.trim()}</p>
                  <a href={`/product/${category.slug}`} className="card-btn">
                    Explore
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DynamicCategoriesCard;
