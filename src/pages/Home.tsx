import { motion } from 'framer-motion';
import { staggerContainer, itemFade } from '@/lib/motion';
import { ArrowRight, CheckCircle, Code2, Users, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.jpg';
import NeuronBackground from '@/components/ui/neuron-background';

const Home = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Tailored software solutions built for your specific business needs'
    },
    {
      icon: Users,
      title: 'Expert Consulting',
      description: 'Strategic guidance from experienced technology professionals'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and regulatory compliance'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <img 
            src={heroImage} 
            alt="Professional technology team" 
            className="w-full h-full object-cover opacity-10"
          />
          <NeuronBackground className="absolute inset-0" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with{' '}
                <span className="gradient-text">Advanced Technology</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                We deliver innovative software solutions, expert consulting, and digital transformation 
                services that drive growth and competitive advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white shadow-large text-lg px-8 py-4 group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="/about#projects">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="text-lg px-8 py-4 border-2 hover:bg-secondary"
                  >
                    View Our Work
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer(0.08, 0.15)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
         >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemFade} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">Veltron AI</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions 
              that drive real results for your organization.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer(0.1, 0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
          >
            {highlights.map((highlight) => (
              <motion.div key={highlight.title} variants={itemFade}>
                <Card className="h-full hover-lift border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <TrendingUp className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our technology solutions can drive growth and innovation 
              for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white/10"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;