import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {useParams} from "react-router-dom";

export default function Page(props) {
  const { slug } = useParams();

  return (
    <>
      <Header />
      This is a page with a slug: {slug}
      <Footer />
    </>
  )
}