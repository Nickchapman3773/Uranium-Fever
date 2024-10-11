import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
<div class="container">
  <div class="video-bg cover">
    <div class="video-fg">
      <iframe src="https://www.youtube.com/embed/1-mxkgp4XhA?autoplay=1&mute=1&controls=0&loop=1&playlist=1-mxkgp4XhA" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="video-fg supports-cover">
      <video src="https://i.imgur.com/2uMciu9.mp4"></video>
    </div>
  </div>
</div>
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
