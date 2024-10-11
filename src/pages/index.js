import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
     <div class="container">
      <div class="video-bg cover">
       <div class="video-fg">
        <iframe src="https://www.youtube.com/embed/j_OyHUqIIOU?controls=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
     </div>
     <!--<div class="video-fg supports-cover">
      <video src="http://techslides.com/demos/sample-videos/small.mp4"></video>
       </div>-->
      </div>
     </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Hardcore TTW Wabbajack Modlist"
    >
      <HomepageHeader />
    </Layout>
  );
}
