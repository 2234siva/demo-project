import React from 'react'

import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import AllenSolly from './AllenSolly.js'
import  Celvinkein from './Celvinkein.js'
import  Gap from './Gap.js'
import Gas from './Gas.js'
import UCB from './UCB.js'
import SuperDry from './SuperDry.js'

import {Row,Col,Container,ListGroup,} from 'react-bootstrap';

import './../src/dist/css/bootstrap.css'

function Fashion() {
    return (<BrowserRouter>
        <div>
           <center> <h1 className="lik">Brands</h1></center>
            <Container className="p-3">
                <Row>
                    <Col xs={4} md={4}>
                    <ListGroup>
                           <ListGroup.Item className="lik">
                               <Link className="lik" to="/Allensolly">Allen Solly</Link></ListGroup.Item>
                           <ListGroup.Item className="lik">
                           <Link className="lik" to="/Celvinkein"> Calvinklein</Link></ListGroup.Item>
                           <ListGroup.Item className="lik">
                           <Link  className="lik" to="/Gap">  Gap</Link></ListGroup.Item>
                           <ListGroup.Item className="lik">
                           <Link className="lik" to="/Gas">  Gas</Link></ListGroup.Item>
                           <ListGroup.Item className="lik">
                           <Link  className="lik" to="/UCB"> UCB</Link></ListGroup.Item>
                           <ListGroup.Item className="lik">
                           <Link className="lik" to="/SuperDry"> Super Dry</Link></ListGroup.Item>
                           </ListGroup>
                    </Col>
                
                     <Col xs={8} md={8}>
                    
                         <Switch>
                         <Route path ="/Fashion" component={AllenSolly}/>
                         <Route path ="/Allensolly" component={AllenSolly}/>
                         <Route path ="/Celvinkein" component={Celvinkein}/>
                         <Route path ="/Gap" component={Gap}/>
                         <Route path ="/Gas" component={Gas}/>
                         <Route path ="/UCB" component={UCB}/>
                         <Route path ="/SuperDry" component={SuperDry}/>
                         </Switch>
                        
                     </Col>
               </Row>
            </Container>
        </div>
   </BrowserRouter> )
}

export default Fashion
