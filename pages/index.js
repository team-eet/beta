import HomePage from "./01-main-demo";
import BackToTop from "./backToTop";

import dotenv from 'dotenv'

export default function Home() {
  return (
    <>
      <main className="">
        <HomePage />
        <BackToTop />
      </main>
    </>
  );
}
