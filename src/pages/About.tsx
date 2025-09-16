import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, Sparkles, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = {
    frontend: ['React.js', 'Bootstrap', 'Responsive UIs'],
    backend: ['Node.js', 'Express.js', 'REST APIs'],
    data: ['MongoDB', 'MySQL', 'Firebase'],
    tools: ['Git', 'Docker', 'Render', 'VS Code']
  };

  const projects = [
    {
      title: 'WanderLust',
      subtitle: 'Airbnb-like vacation rental platform',
      demoUrl: 'https://wanderlust-projectaffan.onrender.com/',
      codeUrl: 'https://github.com/GaneshShindee/WanderLust'
    },
    {
      title: 'EchoBazar',
      subtitle: 'MERN e-commerce with secure checkout & admin panel',
      demoUrl: 'https://echobazar.vercel.app/',
      codeUrl: 'https://github.com/GaneshShindee/ecommerce-website.git'
    },
    {
      title: 'Face Recognition Attendance System',
      subtitle: 'IoT + AI solution for automated attendance',
      demoUrl: undefined,
      codeUrl: 'https://github.com/GaneshShindee/Face-recognition'
    }
  ];

  const education = [
    {
      title: 'B.Tech, VIIT Pune (2022–2026)',
      details: 'Core in DSA, DBMS, CN, OS'
    },
    { title: 'HSC – 94.5%', details: 'Dayanand Junior Science College' },
    { title: 'SSC – 90.8%', details: 'KBP Vidhyalaya, Latur' }
  ];

  const certifications = [
    {
      label: 'IBM Full Stack Software Developer',
      url: 'https://www.coursera.org/account/accomplishments/professional-cert/5B3IQ47YSHK9'
    },
    {
      label: 'SQL for Data Science (UC Davis)',
      url: 'https://www.coursera.org/account/accomplishments/verify/XRBHQPTKQMX0'
    },
    {
      label: 'DevOps and Software Engineering',
      url: 'https://www.coursera.org/account/accomplishments/specialization/U2EPKI0528EL'
    }
  ];

  const leadership = [
    'Associate Technical Head @ EDC VIIT – Led website revamp for Vishwapreneur’24',
    'Placement Coordinator @ VIIT – Helped students & companies connect better',
    'Publicity Head @ NSS – Spreading awareness through social campaigns'
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">👋 Hi, I’m Ganesh Shinde</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">💻 Full-Stack Developer | Problem Solver | Innovator</p>
          <p className="text-base md:text-lg text-muted-foreground">✨ “Turning ideas into impactful digital experiences.”</p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/ganeshshindeviit/" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <a href="https://github.com/GaneshShindee" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <a href="https://leetcode.com/u/GaneshShinde2003/" target="_blank" rel="noreferrer">
                <Globe className="h-4 w-4" /> LeetCode
              </a>
            </Button>
            <Button asChild className="bg-gradient-primary text-white flex items-center gap-2">
              <a href="https://ganeshshindee.github.io/Advance-Portfolio/" target="_blank" rel="noreferrer">
                <Globe className="h-4 w-4" /> Portfolio
              </a>
            </Button>
          </div>
        </motion.div>

        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I’m an aspiring software engineer passionate about creating products that solve real-world problems. With hands-on experience in web development, IoT, and AI, I enjoy building applications that are not just functional but also meaningful. Currently pursuing my B.Tech in Electronics & Telecommunication at VIIT, Pune, I combine academic knowledge with practical projects to bring ideas to life.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Sparkles className="h-5 w-5" />
              <span className="uppercase tracking-wider text-xs font-semibold">What I Do</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Skills & Focus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Frontend Magic</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {skills.frontend.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Backend Power</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {skills.backend.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Data Handling</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {skills.data.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Tools & DevOps</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {skills.tools.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Projects That Define Me</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Card key={p.title} className="border-0 shadow-soft h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.subtitle}</p>
                  <div className="mt-auto flex gap-3">
                    {p.demoUrl && (
                      <Button asChild size="sm" variant="secondary">
                        <a href={p.demoUrl} target="_blank" rel="noreferrer">Live Demo</a>
                      </Button>
                    )}
                    {p.codeUrl && (
                      <Button asChild size="sm" variant="outline">
                        <a href={p.codeUrl} target="_blank" rel="noreferrer">Code</a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <GraduationCap className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-foreground">Education</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-3">
                  {education.map((e) => (
                    <li key={e.title}>
                      <span className="text-foreground font-medium">{e.title}</span>
                      <div>{e.details}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Award className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-foreground">Recognitions & Certifications</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {certifications.map((c) => (
                    <li key={c.label}>
                      • <a href={c.url} target="_blank" rel="noreferrer" className="text-primary hover:underline">{c.label}</a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Beyond Tech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Beyond Tech</h3>
              <ul className="text-muted-foreground space-y-2">
                {leadership.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a href="https://www.vishwapreneur.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Globe className="h-4 w-4" /> Vishwapreneur Event Website
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;