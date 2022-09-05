import * as React from "react"
import Button from "../components/Button"
import Seo from "../components/Seo"
import { Link } from "gatsby"
import "normalize.css"
import "../css/global.scss"
import "../css/components/404.scss"

const NotFoundPage = () => (
  <section className="error_page_container">
    <Seo title="404: Not found" />
    <h1 className="center">404: Not Found</h1>
    <p className="mt-0">You just hit a route that doesn&#39;t exist...</p>
    <p className="mt-0">
      Press the Home button below to return to the main website.
    </p>
    <Link className="mt-2" to="/">
      <Button color="bg-color_primary">Home</Button>
    </Link>
  </section>
)

export default NotFoundPage
