import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>IP</h2>
                <h2 className={styles.sectionTitle}></h2>
              <h2 className={styles.sectionTitle}>Blockchain, the backbone of Digital Ownership</h2>
              <p className={styles.sectionDescription}>Blockchain is a technology that provides a growing list of data structures, called blocks, connected and secured by cryptography. It is the fundamental technology that powers this marketplace and ensures secure ownership of digital assets.</p>
              </div>

              {/* About Intellectual Property Section */}
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Empowering creators with Intellectual Property Rights</h2>
                <p className={styles.sectionDescription}>Intellectual property rights (IPR) are legal rights given to the inventor or creator to protect their inventions or creations for a certain period. This marketplace makes it easy to secure and trade these rights with blockchain technology.</p>
              </div>
              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Explore Creations
                </Link>
              </div>
              {/* Types of Intellectual Property Section */}
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Types of Intellectual Property</h2>
                <p className={styles.sectionDescription}>
                Patents: Blockchain technology can revolutionize how patents are managed. By recording patents on a blockchain, ownership becomes transparent and undisputable. Transactions are time-stamped and cannot be altered, providing a clear record of when an invention was patented. This marketplace takes it a step further, allowing you to tokenize your patent as an NFT. This means you can easily trade or sell your patent rights, all in a secure and efficient way.
                <br></br><br></br>Trademarks: Trademarks are all about identity and recognition. With blockchain, trademark registrations can be securely stored and easily verified. The immutability of blockchain records ensures that the history of a trademark  cannot be tampered with. In our marketplace, trademarks can be tokenized and traded as NFTs. This opens up new opportunities for brand engagement and monetization.
                <br></br><br></br>Copyrights: Copyright infringement is a serious problem in the digital age, but blockchain offers a solution. By registering your copyrighted work on a blockchain, you create an immutable record of your ownership. Also, our marketplace enables you to tokenize your copyrighted works as NFTs. This means you can sell your work digitally, while retaining control over your copyright.
                </p>
              </div>
              
              {/* About Smart Contracts Section */}
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Smart Contracts: Powering Trust in Digital Transactions</h2>
                <p className={styles.sectionDescription}>Smart contracts are executable codes that run on the blockchain to facilitate, execute, and enforce the terms of an agreement between untrusted parties. It is like a digital agreement that automatically executes itself once the agreed conditions are met.</p>
              </div>

              {/* About NFT Section */}
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>NFTs: Unique Proof of Your Digital Assets</h2>
                <p className={styles.sectionDescription}>Non-fungible tokens (NFTs) are unique tokens stored on a blockchain that can be used to represent ownership of digital assets like artworks, recordings, virtual real estate, and pets. In this marketplace, you can easily create, buy, and sell NFTs.</p>
              </div>
              <div>
              <Link
                  className={styles.secondaryCta}
                  href="https://thirdweb.com/mumbai/0x9be11b77322d96bF3e598db868B20A463eae4bda/nfts"
                  target="_blank">
                  Create NFT
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
