import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
  
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  IP MARKETPLACE
                </span>
                <br />
                Transform you IP into nft
              </h1>
              <p className={styles.heroSubtitle}>
              
                this website shows the IP that have been placed on the blockcahin as nfts.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  NFT Showcase
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://thirdweb.com/mumbai/0x601e7750a9E412aEBa4E832Ba715565c1e1D0a4C/nfts"
                  target="_blank"
                >
                  nft contract
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

