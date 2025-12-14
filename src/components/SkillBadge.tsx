import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index: number;
}

export const SkillBadge = ({ name, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 transition-all cursor-default"
    >
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};
