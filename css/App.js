import React, { Component } from 'react';
import './css/App.css';
import Button from '@material-ui/core/Button';
import Start from './components/Start';
import BuyZenta from './components/BuyZenta';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {



  render() {
    return (
      <div>
        <nav>

          <a href="/" class="titleICO">
            <div></div>
            
                <h3 class="text1">
                  <span class="letter letter-1">Z</span>
                  <span class="letter letter-2">E</span>
                  <span class="letter letter-3">N</span>
                  <span class="letter letter-4">T</span>
                  <span class="letter letter-5">A</span>
                  <span class="letter letter-6"> </span>
                  <span class="letter letter-7">T</span>
                  <span class="letter letter-8">O</span>
                  <span class="letter letter-9">K</span>
                  <span class="letter letter-10">E</span>
                  <span class="letter letter-12">N</span>
                  <span class="letter letter-13"> </span>
                  <span class="letter letter-14">I</span>
                  <span class="letter letter-15">C</span>
                  <span class="letter letter-16">O</span>
                </h3>  

          </a>

          <div class="middleNav">
            
            <a class="zentanav" onClick={() => scrollToComponent(this.BuyZenta, { offset: -70, align: 'top', duration: 1500})}><Button>BUY ZENTA</Button></a>
            <a class="About" id="link"  href="https://*"><Button>GO TO FAQ</Button></a>
            <a class="Whitepaper" id="link"  href="https://zentachain.io/zentachain-whitepaper/"><Button>Whitepaper</Button></a>
            <a class="Home" id="link"  href="https://zentachain.io/"><Button>GO TO ZENTACHAIN</Button></a>
          </div>

          <div class="rightNav">
            <i class="material-icons">account_box</i>

            <div class="myAccountBox">
              <div class="address"> Address:</div>
              <div class="eth"> ETH: 12 </div>
              <div class="zentatoken"> MY ZENTA TOKEN: 1234 </div>
            </div>
          </div>

        </nav>

        <div id="startDiv"> <Start/> </div>   
        <div ref={(section) => { this.BuyZenta = section; }}> <BuyZenta/></div>


      </div>
      
    );
  }
}

export default App;
