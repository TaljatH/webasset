import { useState } from 'react';
import { Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm tracking-wide text-rose-600 bg-rose-100 px-4 py-2 rounded-full inline-block mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            We'd Love to Hear From You
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our products? Need skincare advice? We're here to help!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl tracking-tight mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We typically respond within 24 hours.
              </p>
            </div>

            <Card className="p-6 border-0 bg-gray-50/50 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="mb-2">Email Us</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    For general inquiries and support
                  </p>
                  <a 
                    href="mailto:hello@kglowoslo.no" 
                    className="text-rose-600 hover:text-rose-700 transition-colors"
                  >
                    hello@kglowoslo.no
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2">Visit Us</h3>
                  <p className="text-sm text-gray-600">
                    Grønland 45<br />
                    0188 Oslo<br />
                    Norway
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-2">Business Hours</h3>
                  <p className="text-sm text-gray-600">
                    Monday - Friday: 10:00 - 18:00<br />
                    Saturday: 11:00 - 16:00<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <div>
              <h3 className="mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-0 bg-gray-50/50">
            <h2 className="text-2xl tracking-tight mb-6">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-white"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-white min-h-[150px]"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>

              {submitted && (
                <p className="text-center text-green-600 text-sm animate-in fade-in duration-300">
                  ✓ Thank you! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
