import * as React from 'react'
import Helmet from 'react-helmet'

const BeforeAndAfter=()=>{
    return (
        <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>   
        <h1>This is page one of my blog</h1>
        </div>
    )
}
export default BeforeAndAfter