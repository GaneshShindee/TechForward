import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">Veltron AI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering Indian businesses with cutting-edge technology solutions, AI innovation, and digital transformation expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/veltron-ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/veltron_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/veltron-ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@veltron.ai" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@veltron.ai
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+919921868240" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9921868240
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <span className="text-muted-foreground">Available 24/7 for Enterprise Support</span>
              </div>
            </div>
          </div>

          {/* Newsletter & Business Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with the latest in Indian tech innovation, AI breakthroughs, and digital transformation trends.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="text-sm"
              />
              <Button className="w-full bg-gradient-primary hover:opacity-90 text-white text-sm">
                Subscribe
              </Button>
            </div>
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <strong>Business Hours:</strong><br />
                Mon-Fri: 9AM-6PM IST<br />
                24/7 Support for Enterprise Clients
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Veltron AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;