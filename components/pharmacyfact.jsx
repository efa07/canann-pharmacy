import { motion } from 'framer-motion';
// --- Assuming you import modern icons (e.g., from lucide-react) ---
import { Clock, Pill, Scale, Globe } from 'lucide-react'; 

// --- Define your Framer Motion variants ---
const containerStagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// --- Updated Data Structure with modern Icons ---
const facts = [
  { 
    title: "Years of Experience", 
    value: "25+", 
    detail: "Serving the community since 1998", 
    Icon: Clock
  },
  { 
    title: "Core Services", 
    value: "7+", 
    detail: "From prescriptions to consultations", 
    Icon: Pill
  },
  { 
    title: "Ethical Standards", 
    value: "100%", 
    detail: "Licensed and regulated", 
    Icon: Scale
  },
  { 
    title: "Languages Spoken", 
    value: "2", 
    detail: "Amharic, English", 
    Icon: Globe
  },
];

const PharmacyFacts = () => (
  <motion.div
    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
    variants={containerStagger}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
  >
    {facts.map((fact, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center justify-center text-center 
                   bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 
                   rounded-xl p-8 shadow-md 
                   hover:shadow-xl hover:border-primary // Card border color set to primary on hover
                   transition-all duration-300 group cursor-pointer" 
        variants={fadeIn}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -4 }} 
      >
        {/* ICON (Background set to primary color) */}
        <div className="mb-4 p-3 rounded-full 
                        bg-primary // Primary color background
                        transition-colors duration-300">
          
          <fact.Icon 
            className="w-8 h-8 
                       text-primary-foreground" // Use 'primary-foreground' for text/icons *on* the primary background
          />
        </div>

        {/* VALUE (Using primary color) */}
        <div className="text-5xl font-bold 
                        text-primary // Primary color for the key number
                        mb-1 tracking-tighter">
          {fact.value}
        </div>

        {/* TITLE */}
        <div className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
          {fact.title}
        </div>

        {/* DETAIL */}
        <div className="text-sm text-gray-500 dark:text-gray-400 leading-snug max-w-xs">
          {fact.detail}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default PharmacyFacts;