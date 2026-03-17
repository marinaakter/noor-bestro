import { motion } from "framer-motion";

import { fadeUp } from "../../lib/motion";
import { uiTokens } from "../../styles/uiTokens";
import { formatCurrency } from "../../utils/formatCurrency";
import Badge from "../common/Badge";

function MenuCard({ item }) {
  return (
    <motion.article className={uiTokens.dishCard.root} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }}>
      <div className={uiTokens.dishCard.imageWrap}>
        <img src={item.image} alt={item.name} className={uiTokens.dishCard.image} />
      </div>
      <div className={uiTokens.dishCard.content}>
        <div className={uiTokens.dishCard.badges}>
          {item.isFeatured ? <Badge>Featured</Badge> : null}
          {item.isChefSpecial ? <Badge variant="chef">Chef Special</Badge> : null}
          {item.isSpicy ? <Badge variant="spicy">Spicy</Badge> : null}
        </div>
        <div className={uiTokens.dishCard.header}>
          <h3 className={uiTokens.dishCard.title}>{item.name}</h3>
          <span className={uiTokens.dishCard.price}>{formatCurrency(item.price)}</span>
        </div>
        <p className={uiTokens.dishCard.description}>{item.description}</p>
      </div>
    </motion.article>
  );
}

export default MenuCard;
