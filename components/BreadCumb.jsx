import Link from 'next/link';

const BreadCumb = ({ breadcrumbData = [] }) => {
  if (!Array.isArray(breadcrumbData) || breadcrumbData.length === 0) return null;

  return (
    <section className="breadcrumb_area_two">
      <div className="container">
        <div className="breadcrumb_content">
          <ul className="breadcrumb_list">
            <li>
              <Link href="/">Home</Link>
              <i className="arrow_carrot-right"></i>
            </li>

            {breadcrumbData.map((item, index) => {
              const isLastItem = index === breadcrumbData.length - 1;

              return (
                <li key={index}>
                  {isLastItem ? (
                    <span aria-current="page">{item.name}</span>
                  ) : (
                    <>
                      <Link href={item.slug}>{item.name}</Link>
                      <i className="arrow_carrot-right"></i>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BreadCumb;
