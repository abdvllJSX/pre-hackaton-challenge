import Hero from "../../components/Hero/hero"
import Intro from "../../components/intro/intro"
import Reward from "../../components/rewards/rewards"
import Footer from "../../components/footer/footer";
import Partners from "../../components/partners/partners";
import Criteria from "../../components/criteria/criteria";
import Timeline from "../../components/timeline/timeline";
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Criteria />
      <Timeline />
      <Reward />
      <Partners />
      <Footer />
    </>
  )
}