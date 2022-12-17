import { useState } from "react"
import Activities from "../../components/activities"
import Cofounders from "../../components/co-founder"
import Header from "../../components/header"
import Services from "../../components/services"
import Spinner from "../../components/spinner"
import Testmonials from "../../components/testmonial"
import Underline from "../../components/under line"
import Vision from "../../components/vision"
import Articles from "../articles"
import Contacts from "../../components/contacts"

const Home = () => {
  const [spinner, setIsSpinner] = useState(true);
  setTimeout(() => {
    setIsSpinner(false)
  }, 4500);

  return (
    <div id="home" className=" dark:bg-dim-gray">
      {
        spinner ? <Spinner/>
        :
      <div>
        <Header/>
        <Underline title={"Vision"}/>
        <Vision/>
        <Underline title={"Services"} bgColor={"bg-gray-100"}/>
        <Services/>
        <Underline title={"Activities"}/>
        <Activities/>
        <Underline title={"Testmonials"} bgColor={"bg-gray-100"}/>
        <Testmonials/>
        <Underline title={"Articles"} />
        <Articles/>
        <Underline title={"Cofounders"} bgColor={"bg-gray-100"}/>
        <Cofounders/>
        <Contacts/>
      </div>
      }
    </div>
  )
}

export default Home