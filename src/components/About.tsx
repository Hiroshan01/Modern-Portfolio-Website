import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';
import { skills } from '../data/portfolio';
import { SkillBadge } from './SkillBadge';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices and design patterns.',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful, intuitive interfaces with attention to detail and user experience.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed, efficiency, and exceptional user experiences.',
  },
];

export const About = () => {
  const frontendSkills = skills.filter((s) => s.category === 'frontend');
  const backendSkills = skills.filter((s) => s.category === 'backend');
  const toolSkills = skills.filter((s) => s.category === 'tools');

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate web developer with expertise in building modern,
            responsive applications. I love turning complex problems into simple,
            beautiful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technologies & Skills
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                Frontend
              </h4>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill, index) => (
                  <SkillBadge key={skill.name} name={skill.name} index={index} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                Backend
              </h4>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, index) => (
                  <SkillBadge key={skill.name} name={skill.name} index={index} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                Tools & Others
              </h4>
              <div className="flex flex-wrap gap-3">
                {toolSkills.map((skill, index) => (
                  <SkillBadge key={skill.name} name={skill.name} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
