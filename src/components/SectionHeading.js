import { motion } from "framer-motion";
import { reveal } from "../motionPresets";

export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div {...reveal} className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  );
}
