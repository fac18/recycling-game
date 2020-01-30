import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  OrangeText,
  CloseCross
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


const FunFactsBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  display: block;
  z-index: 3000;
  border-radius: 25px;
  border: 2px solid #08345C;
  filter: drop-shadow(4px 4px 4px #08345C);
  text-align: center;
`;

const FactList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;

  li {
  line-height: 1.5em;
  // padding-bottom: 1em;
  }
`;

const Flexy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const ExtLink = styled.a`
  color: #FF8A00;
`;

const FunFactsModal = ({ handleClose }) => {
  return (
    <FunFactsBox>
        <CloseCross onClick={handleClose} />
        <PageHeader>About Recycling</PageHeader>
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
            <Walk width="150px"  height="150px"/>
            <Tap width="150px"  height="150px"/>
            <TV width="150px"  height="150px"/>
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
            <PlasticBag width="150px"  height="150px"/>
            <Shirt width="150px"  height="150px"/>
            <Paper width="150px"  height="150px"/>
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
            <PlasticBottle width="150px" height="150px"/>
            <DrinksCan width="150px" height="150px"/>
            <Apple width="150px" height="150px"/>
          </Flexy>

          </BoxMessage>
        </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          
          Discover more about how to recycle in your local area and reduce waste by visiting <ExtLink href='https://www.recyclenow.com/' target="blank">Recycle Now</ExtLink>.

        </BoxMessage>
      </MessageBox>

        <Button primary handleClick={handleClose} label="Close"></Button>

    </FunFactsBox>
  );
};

export default FunFactsModal;
