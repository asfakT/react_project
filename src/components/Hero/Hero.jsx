import styles from "./Hero.module.css";

const HeroSection = () => {
    return (
        <main className={`${styles.hero} container`}>
            <div className={styles["hero-content"]}>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES. WE’RE HERE TO DELIVER IT WITH OUR PREMIUM FOOTWEAR.
                </p>

                <div className={styles["hero-btn"]}>
                    <button className="btn-login">Shop Now </button>
                    <button className={styles["btn-login"]}>Category</button>
                </div>

                <div className={styles.shopping}>
                    <p>Also Available On</p>

                    <div className={styles["brand-icons"]}>
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className={styles["hero-image"]}>
                <img src="/images/hero-image.png" alt="hero-image" />
            </div>
        </main>
    );
};

export default HeroSection;
