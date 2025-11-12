import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-4">
              Get Exclusive Offers
            </h2>
            <p className="text-gray-600">
              Join our community and be the first to know about new arrivals, exclusive deals, 
              and the latest in K-beauty trends. Plus, get 10% off your first order!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-6 border-gray-200 focus:border-pink-300 rounded-full"
              required
            />
            <Button 
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>

          {subscribed && (
            <p className="mt-4 text-green-600 animate-in fade-in duration-300">
              ✓ Thank you for subscribing! Check your email for your welcome offer.
            </p>
          )}

          <p className="mt-6 text-xs text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
