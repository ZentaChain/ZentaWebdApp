import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import App from '../App';

class Start extends Component {

  render() {
    return (
      <div>

        <div class="container">
          <div class="containerMiddle">
            <div class="header1"></div>
            
            <div>&nbsp;</div>
            <div class="flex">
              <div class="textArea">
              </div>
              <iframe width="1080" height="500" src="https://www.youtube.com/embed/-JkLhgHcMCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

            <div class="tokenSaleContainer flex">
              <div class="tokenSaleLeftSide">
                <div class="flex space-between">
                  <div class="tokensSold">Tokens Sold: 0</div>
                  <div class="Buyer">Total buyers:<b> 50</b></div>
                </div>
                <div class="totalSuppy">4545454 <b>ZENTA</b></div>
                
              </div>

              <div class="tokenSaleRightSide">
                <div class="titleTokenSale">TOKEN SALE IS NOW LIVE</div>
                <div class="tokenSaleEnds"> TOKEN SALE ENDS IN </div>
                <div class="time flex space-around">
                  <div>
                    <div class="headerTime" >31</div>
                    <div>Days</div>
                  </div>
                  <div>
                    <div class="headerTime" >12</div>
                    <div>Hours</div>
                  </div>
                  <div>
                    <div class="headerTime" >60</div>
                    <div>Min</div>
                  </div>
                  <div>
                    <div class="headerTime" >0</div>
                    <div>Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Icons space-around flex">
          <i class="fab fa-ethereum"></i>
          <i class="fab fa-medium"></i>
          <i class="fab fa-telegram-plane"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-reddit-alien"></i>
        </div>
         
      </div>

    );
  }

}

export default Start;
