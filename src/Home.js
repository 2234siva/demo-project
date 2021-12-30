import React from'react'

import Footer from './Footer';

import {Link,} from 'react-router-dom'

import {Row,Col,Image} from 'react-bootstrap';
import './../src/dist/css/bootstrap.css'

function Home() 
{
    return(
         <div>

  
        
  <Row>
    <Col xs={4} md={4}x>
      <Image alt="" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tshirt_web.jpg?format=webp&w=480&dpr=1.3"/>
     </Col>
    <Col xs={4} md={4}>
      <Image alt="" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/dressname-tiles_tl64iMG.jpg?format=webp&w=480&dpr=1.3"/>
    </Col>
    <Col xs={4} md={4}>
      <Image alt="" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/shirt-web1.jpg?format=webp&w=480&dpr=1.3"/>
    </Col>
  </Row>

    

<Row>
  {/*Col*/}
  <Col xs={4} md={3}>
     <Link href="T-Shirts.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/dropcut_web.jpg?format=webp&w=360&dpr=1.3"/></Link>
    </Col>
 {/*Col*/}

{/*Col*/}
<Col xs={4} md={3}>
<Link href="Woven Jogger Pants.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/woven_jogger_pants_web.jpg?format=webp&w=360&dpr=1.3"/></Link>
</Col>
{/*Col*/}

{/*Col*/}
<Col xs={4} md={6}>
<Link href="Men's Pajamas.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/pajamasweb.jpg?format=webp&w=750&dpr=1.3"/></Link>
</Col>
{/*Col*/}
</Row>


<Row>
  {/*Col*/}
   <Col xs={4} md={6}> 
     <Link href="Men's Cotton Pants.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/men_cotton_pants_web.jpg?format=webp&w=750&dpr=1.3"/></Link>
    </Col>
{/*Col*/}

{/*Col*/}
<Col xs={4} md={3}> 
<Link href="Shorts.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/shorts_web.jpg?format=webp&w=360&dpr=1.3"/></Link>
</Col>
{/*Col*/}

{/*Col*/}
<Col xs={4} md={3}> 
<Link href="Polos.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/polo_web.jpg?format=webp&w=360&dpr=1.3"/></Link>
</Col>
{/*Col*/}
</Row>

<Row>
{/*Col*/}
  <Col xs={4} md={3}> 
     <Link href="Men's Joggers.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/men_jogger_web_6xxqlvE.jpg?format=webp&w=360&dpr=1.3"/></Link>
    </Col>
{/*Col*/}

{/*Col*/}
<Col xs={4} md={3}> 
<Link href="Women's Shirts.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/women_shirt_web.jpg?format=webp&w=360&dpr=1.3"/></Link>
</Col>
{/*Col*/}

{/*Col*/}
<Col xs={4} md={6}> 
<Link href="Boxers.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3"  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/boxer_web_ZbgVXj4.jpg?format=webp&w=750&dpr=1.3"/></Link>
</Col>
{/*Col*/}
</Row>


<Row>
 
{/*Col*/}
<Col xs={4} md={3}> 
  <Link href="Full Sleev T-shirts.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/full_sleeve_web.jpg?format=webp&w=360&dpr=1.3"/></Link>
 </Col>
{/*Col*/}

{/*Col*/}
<Col xs={4} md={3}> 
<Link href="Tank Tops.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/woman_tank_top_web.jpg?format=webp&w=360&dpr=1.3"/></Link>
</Col>
{/*Col*/}

{/*Col*/}
<Col xs={4} md={3}> 
  <Link href="Chino Shorts.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Chino-Shortsname-tiles.jpg?format=webp&w=360&dpr=1.3"/></Link>
 </Col>
{/*Col*/}

{/*Col*/}
<Col xs={4} md={3}> 
<Link href="Tank tops and Vests.html" className="pagelink"><Image alt=""  className="card-img-top w-35 mx-auto my-3" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tank_top_web.jpg?format=webp&w=360&dpr=1.3"/></Link>
</Col>
{/*Col*/}
</Row>
    </div>
    )
}

<Footer/>

export default Home