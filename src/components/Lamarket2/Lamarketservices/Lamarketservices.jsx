
import React from 'react';
import './Lamarketservices.css';

const services = [
    { title: 'Web Development :', description: 'Transform your digital presence with our expert web development services. We create stunning, responsive websites tailored to your business needs, ensuring optimal performance and user experience across all devices. Let us bring your vision to life with cutting-edge technology and design.' },
    { title: 'Branding :', description: 'Elevate your brand with our comprehensive branding services. We craft unique, memorable brand identities that resonate with your audience and set you apart from the competition. From logo design to brand strategy, we ensure a cohesive and impactful presence across all platforms.' },
    { title: 'Digital Consulting Strategies :', description: 'We analyze your current digital landscape and provide tailored solutions to optimize performance, drive growth, and enhance your online presence. Let us guide you through the complexities of the digital world with strategic insights and actionable plans.' },
    { title: 'Community Management :', description: 'Build and engage your audience with our community management services. We foster meaningful interactions, manage your online presence, and create strategies to boost engagement and loyalty. Let us help you cultivate a vibrant community that supports and amplifies your brand.' },
    { title: 'SEO, SEM, SEA :', description: 'We enhance your search engine rankings, drive targeted traffic through strategic ad campaigns, and optimize your digital presence for maximum impact. Let us help you achieve higher search rankings and increased conversions.' },
    { title: 'Medical Communication Service :', description: 'We create clear, accurate, and engaging content tailored to your audience, ensuring your message resonates with patients, professionals, and stakeholders. Let us help you communicate complex medical information with clarity and impact' },
    { title: 'Audiovisual Production:', description: 'Bring your vision to life with our audiovisual production services. We craft high-quality videos, animations, and soundscapes that captivate and engage your audience. From concept to final cut, we deliver compelling content that tells your story with creativity and precision.' }
];

const Lamarketservices = () => {
    return (
        <section className="lamarketservices" id="services">
            <h2 className="services-title">Our Services :</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-item" key={index}>
                        <h3 className="service-heading">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Lamarketservices;
