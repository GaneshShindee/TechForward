import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, TrendingUp, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import techPatternImage from '@/assets/tech-pattern.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading technology partner that transforms how businesses operate and succeed in an increasingly digital world.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service and project delivery.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership and work closely with our clients to achieve shared success.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'Full-Stack Development, Cloud Architecture',
      experience: '12+ years'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Solutions Architect',
      expertise: 'Enterprise Software, DevOps',
      experience: '10+ years'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Data Science',
      expertise: 'Machine Learning, Analytics',
      experience: '8+ years'
    },
    {
      name: 'David Kim',
      role: 'Senior Security Consultant',
      expertise: 'Cybersecurity, Compliance',
      experience: '15+ years'
    }
  ];

  const achievements = [
    { number: '150+', label: 'Successful Projects' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '5+', label: 'Industry Awards' }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-text">TechForward</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate technologists, innovators, and problem-solvers dedicated 
            to helping businesses thrive in the digital era.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, TechForward emerged from a simple belief: that technology should 
                  be an enabler, not a barrier. Our founders, experienced software engineers and 
                  business consultants, recognized the gap between complex technical solutions and 
                  real business needs.
                </p>
                <p>
                  Over the years, we've grown from a small startup to a trusted technology partner 
                  for businesses of all sizes. Our commitment to excellence, innovation, and client 
                  success has remained unchanged, even as we've expanded our capabilities and team.
                </p>
                <p>
                  Today, we're proud to have delivered over 150 successful projects, helping companies 
                  across various industries modernize their operations, improve efficiency, and 
                  achieve their digital transformation goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={techPatternImage} 
                alt="Technology patterns representing our innovation" 
                className="rounded-2xl shadow-large"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <TrendingUp className="h-16 w-16 text-white mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white/80">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals who are passionate about technology and committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code2 className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      {member.expertise}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.experience}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-secondary/50 rounded-2xl p-8 md:p-12"
        >
          <Users className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help you achieve your technology goals and 
            drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-lg font-medium transition-opacity">
              Schedule a Meeting
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-medium transition-colors">
              View Our Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;