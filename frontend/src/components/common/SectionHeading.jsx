import { motion } from "framer-motion";

import { fadeUp } from "../../lib/motion";
import { uiTokens } from "../../styles/uiTokens";
import { cn } from "../../utils/cn";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? uiTokens.sectionHeading.centered : uiTokens.sectionHeading.wrapper;

  return (
    <motion.div className={cn(alignment)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp}>
      {eyebrow ? <span className={uiTokens.sectionHeading.eyebrow}>{eyebrow}</span> : null}
      <h2 className={uiTokens.sectionHeading.title}>{title}</h2>
      {description ? <p className={uiTokens.sectionHeading.description}>{description}</p> : null}
    </motion.div>
  );
}

export default SectionHeading;
