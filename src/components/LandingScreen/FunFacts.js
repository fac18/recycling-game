import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  OrangeText,
  CloseCross,
  Spacer
} from "../MasterCss";

import { ReactComponent as Paper } from "../../assets/paper.svg";
import { ReactComponent as Apple } from "../../assets/apple-core.svg";
import { ReactComponent as Shirt } from "../../assets/shirt.svg";
import { ReactComponent as Walk } from "../../assets/walk.svg";
import { ReactComponent as DrinksCan } from "../../assets/drinks-can.svg";
import { ReactComponent as PlasticBag } from "../../assets/plastic-bag.svg";
import { ReactComponent as PlasticBottle } from "../../assets/plastic-bottle.svg";
import { ReactComponent as TV } from "../../assets/tv.svg";
import { ReactComponent as Tap } from "../../assets/tap.svg";
import crossButton from "../../assets/x-button.svg";

const FunFactsBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  overflow-y: scroll;
  display: block;
  z-index: 3000;
  border-radius: 1em;
  border: 2px solid #08345C;
  filter: drop-shadow(4px 4px 4px #08345C);
  text-align: center;
  @media (max-width: 480px) {
    padding-bottom: 13.4vh;
  }
  
`;



const FactList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;

  li {
  line-height: 1.5em;
  }
`;

const Flexy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
 `;

const ExtLink = styled.a`
  color: #FF8A00;
`;

const FunFactsModal = ({ handleClose }) => {
  const svgSize = window.matchMedia('screen and (max-width: 768px)').matches ? '60px' : '150px';
  return (
    <FunFactsBox>
        <HeaderWrapper>
          <CloseCross onClick={handleClose} src={crossButton} />
          <PageHeader>About Recycling</PageHeader>
        </HeaderWrapper>
        <MessageBox primary><BoxMessage>

        <p>All the natural resources we use and rubbish we create is hurting the planet and the animals who share it with us.</p>

        <p>This may sound scary but there's something we can all do about it!</p>

        <p>We can <OrangeText>REDUCE, REUSE</OrangeText> and <OrangeText>RECYCLE</OrangeText>, to prevent our rubbish from going into smelly landfills or ending up in the ocean.</p></BoxMessage>
        </MessageBox>

       

        <MessageBox primary>
          <BoxMessage>
          <p><OrangeText>REDUCE</OrangeText></p>
          
          <FactList>
            <li>When you’re shopping, only buy what you need.</li>
            <li>Can you shop at a zero-waste grocery store?</li>
            <li>Try to walk more instead of using the car. Your parents will use less petrol!</li>
            <li> Turn off the tap when brushing your teeth and you'll waste less water</li>
            <li>Switch off the TV, games console, and electrical items to reduce your energy use</li>
          </FactList>

          <Flexy>
            <Walk width={svgSize}  height={svgSize}/>
            <Tap width={svgSize}  height={svgSize}/>
            <TV width={svgSize}  height={svgSize}/>
          </Flexy>
          

          </BoxMessage>
        </MessageBox>

        <MessageBox primary>
          <BoxMessage>
            
          <p><OrangeText>REUSE</OrangeText></p>

          <FactList>
            <li>Take a reusable bag for life or old carrier bag with you when heading to the shops</li>
            <li>When something is broken, see if you can mend it instead of throwing it away</li>
            <li>If it can’t be mended, see if you can find a new use for it!</li>
            <li>Give unwanted items to charity</li>
            <li>Reuse scrap paper – you can always use both sides of a sheet of paper to draw on!</li>
          </FactList>

          <Flexy>
            <PlasticBag width={svgSize}  height={svgSize}/>
            <Shirt width={svgSize}  height={svgSize}/>
            <Paper width={svgSize}  height={svgSize}/>
          </Flexy>

          </BoxMessage>
        </MessageBox>

        <MessageBox primary>
          <BoxMessage>
          
          <p><OrangeText>RECYCLE</OrangeText></p>
          
            <FactList>
              <li>Always see if you can buy things made from recycled materials</li>
              <li>Sort all your rubbish so that the glass, tin cans, plastic and paper can be recycled</li>
              <li>Think about what other things can be recycled at your local recycling centre, like batteries, ink cartridges and clothes</li>
              <li>Use kitchen waste to make compost for the garden</li>
            </FactList>

          <Flexy>
            <PlasticBottle width={svgSize} height={svgSize}/>
            <DrinksCan width={svgSize} height={svgSize}/>
            <Apple width={svgSize} height={svgSize}/>
          </Flexy>

          </BoxMessage>
        </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          
          Discover more about how to recycle in your local area and reduce waste by visiting <ExtLink href='https://www.recyclenow.com/' target="blank">Recycle Now</ExtLink>.

        </BoxMessage>
      </MessageBox>

        <Button primary handleClick={handleClose} label="Close"></Button>
        <Spacer/>
    </FunFactsBox>
  );
};

export default FunFactsModal;
