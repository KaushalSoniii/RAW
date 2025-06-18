import React, { useState } from 'react';

interface ContactSectionProps {
  id: string;
}

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);


const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    fullName: '', // Changed from firstName, lastName
    email: '',
    company: '', // Added company field
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in Full Name, Email, and Message.' });
      setIsSubmitting(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data submitted:', formData);
    setSubmitStatus({ type: 'success', message: "Thank you for your message! We'll be in touch soon." });
    setFormData({ fullName: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id={id} className="py-16 md:py-24 lg:py-32 bg-brand-dark-bg text-brand-dark-text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left Column */}
          <div className="animate-fade-in-up space-y-8" style={{animationDelay: '0s', animationFillMode: 'forwards'}}>
            <div className="bg-brand-dark-surface p-3 rounded-lg shadow-md w-16 h-16 flex items-center justify-center">
              <MailIcon className="w-8 h-8 text-brand-contact-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark-text-primary font-sans">
              Contact us
            </h2>
            <p className="text-brand-dark-text-secondary text-base md:text-lg leading-relaxed">
              Have a project in mind, a question about our work, or just want to connect? We'd love to hear from you. Fill out the form below, and our team will get back to you as soon as possible.
            </p>
            
            <ul className="space-y-3 text-brand-dark-text-secondary">
              <li className="flex items-center">
                <span className="font-medium mr-2 text-brand-dark-text-primary">&#8226;</span> contact@rwrobotics.ai
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2 text-brand-dark-text-primary">&#8226;</span> +1 (800) 123 4567
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2 text-brand-dark-text-primary">&#8226;</span> support@rwrobotics.ai
              </li>
            </ul>

            {/* World Map and "We are here" marker removed */}

          </div>

          {/* Right Column - Form */}
          <div 
            className="bg-brand-dark-surface/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border border-brand-dark-border animate-fade-in-up"
            style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="form-label-dark block mb-1 font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-brand-dark-border bg-brand-dark-bg text-brand-dark-text-primary placeholder-brand-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 shadow-sm hover:border-brand-accent"
                  placeholder="e.g. Alex Johnson"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="form-label-dark block mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-brand-dark-border bg-brand-dark-bg text-brand-dark-text-primary placeholder-brand-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 shadow-sm hover:border-brand-accent"
                  placeholder="you@example.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="company" className="form-label-dark block mb-1 font-medium">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-brand-dark-border bg-brand-dark-bg text-brand-dark-text-primary placeholder-brand-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 shadow-sm hover:border-brand-accent"
                  placeholder="Your Company Inc."
                />
              </div>
            
              <div>
                <label htmlFor="message" className="form-label-dark block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-brand-dark-border bg-brand-dark-bg text-brand-dark-text-primary placeholder-brand-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 shadow-sm hover:border-brand-accent resize-none"
                  placeholder="Type your message here..."
                  aria-required="true"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-[#1F1F1F] hover:bg-brand-dark-border text-brand-dark-text-primary font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-accent/70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
            {submitStatus && (
              <p className={`mt-6 text-center text-sm ${submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {submitStatus.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;