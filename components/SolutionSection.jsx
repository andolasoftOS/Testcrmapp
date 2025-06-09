import Image from 'next/image';
import Link from 'next/link';

const SolutionSection = () => {
  return (
    <section className="doc_solution_area sec_pad">
      <div className="container">
        <div className="section_title text-center">
          <h2 className="h_title wow fadeInUp">Didn't find any Solution?</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Loaded with awesome features like Documentation, Knowledgebase, Forum & more!
          </p>
        </div>
        <div className="row">
          {solutions.map((solution, index) => (
            <div key={index} className="col-sm-6">
              <div
                className={`doc_solution_item ${solution.className} wow fadeInUp`}
                data-wow-delay={`${index * 0.3}s`}
              >
                <Image
                  src={`/images/${solution.icon}`}
                  alt=""
                  width={50}
                  height={50}
                />
                <h4>{solution.title}</h4>
                <p>{solution.description}</p>
                <Link href={solution.link} className="learn_btn c_blue">
                  {solution.buttonText}
                  <i className="arrow_right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="doc_border_btn all_doc_btn wow fadeInUp"
            data-wow-delay="0.6s"
          >
            Live Chat Now<i className="icon_chat_alt"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Sample data for solutions
const solutions = [
  {
    icon: 'Briefcase.png',
    title: 'Online Documentation',
    description:
      'Horse play barmy Oxford bonnet are you taking the piss cheeky mufty nice one young delinquent.',
    link: '#',
    buttonText: 'Go To Documentation',
    className: 'online_doc',
  },
  {
    icon: 'setting-icon.png',
    title: 'Premium Support',
    description:
      'Horse play barmy Oxford bonnet are you taking the piss cheeky mufty nice one young delinquent.',
    link: '#',
    buttonText: 'Go To Documentation',
    className: 'premium_doc',
  },
];

export default SolutionSection;