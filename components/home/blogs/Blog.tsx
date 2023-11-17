import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./blog.module.scss";
interface Props {
  title: string;
  imgSrc: string;
  tech: string[];
  blogLink: string;
  description: string;
}

export const Blog = ({ title, imgSrc, tech, blogLink, description }: Props) => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={styles.projectImage}
        >
          <Image
            priority
            src={imgSrc}
            alt={title}
            width={500}
            height={300}
            style={{
              width: hovered ? "90% !important" : "100% !important",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description} <br />
              <Link href={blogLink}>
                <span>Read more {">"}</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </motion.div>
    </>
  );
};
