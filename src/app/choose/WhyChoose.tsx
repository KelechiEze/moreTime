import Image from "next/image";
import './WhyChooseUs.css';

const WhyChoose = () => {
  return (
    <section className="why-choose-container">
      <h2 className="section-title">Why Choose More Time</h2>
      <div className="benefits">
        {/* Fast Approval */}
        <div className="benefit-item">
          <Image src="/locck.png" alt="Fast Approval" width={50} height={50} />
          <p>Fast Approval</p>
        </div>

        {/* Flexible Lending Options */}
        <div className="benefit-item">
          <Image src="/pikto1.png" alt="Flexible Lending Options" width={50} height={50} />
          <p>Flexible Lending Options</p>
        </div>

        {/* Secure & Transparent */}
        <div className="benefit-item">
          <Image src="/bluo.png" alt="Secure & Transparent" width={50} height={50} />
          <p>Secure & Transparent</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
