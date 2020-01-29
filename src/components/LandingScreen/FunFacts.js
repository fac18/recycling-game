import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  BadgeBox,
  OrangeText
} from "../MasterCss";


import { ReactComponent as Cross } from "../../assets/x-button.svg";
import { ReactComponent as Newspaper } from "../../assets/newspaper.svg";
import { ReactComponent as Paper } from "../../assets/paper.svg";
import { ReactComponent as Apple } from "../../assets/apple-core.svg";
import { ReactComponent as Shirt } from "../../assets/shirt.svg";
import { ReactComponent as CardboardBox } from "../../assets/cardboard-box.svg";
import { ReactComponent as CoffeeCup } from "../../assets/coffee-cup2.svg";
import { ReactComponent as DrinksCan } from "../../assets/drinks-can.svg";
import { ReactComponent as PlasticBag } from "../../assets/plastic-bag.svg";
import { ReactComponent as TeaBag } from "../../assets/tea-bag.svg";



const FunFactsBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  padding: 2em;
  position: absolute;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  display: block;
  z-index: 3000;
  border-radius: 25px;
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
`;

const FunFactsModal = ({ handleClose }) => {
  return (
    <FunFactsBox>
      <section className="modal-main">
        <Cross onClick={handleClose} />
        <PageHeader>About recycling?</PageHeader>
        <MessageBox primary><BoxMessage>
        <p>All the rubbish we create is hurting the planet and the animals who share it with us.</p>

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
          <li>Switch off the TV, games console, and electrical items to reduce your energy use</li>
          <li> Turn off the tap when brushing your teeth and you'll waste less water</li>
          </FactList>
          </BoxMessage>
        </MessageBox>

        <MessageBox primary>
          <BoxMessage>
            <FactList>
          <p><OrangeText>REUSE</OrangeText></p>
          <li>Take a reusable bag for life or old carrier bag with you when heading to the shops</li>
          <Flexy><Shirt width="100px"/><li>When something is broken, see if you can mend it instead of throwing it away</li></Flexy>
          <li>If it can’t be mended, see if you can find a new use for it!</li>
          <li>Give unwanted items to charity</li>
          <Flexy><Paper width="100px"/><li>Reuse scrap paper – you can always use both sides of a sheet of paper to draw on!</li></Flexy>
          </FactList>
          </BoxMessage>
        </MessageBox>

        <MessageBox primary>
          <BoxMessage>
          <FactList>
          <p><OrangeText>RECYCLE</OrangeText></p>
          <li>Always see if you can buy things made from recycled materials</li>
          <li>Sort all your rubbish so that the glass, tin cans, plastic and paper can be recycled</li>
          <Apple width="100px"/><li>about what other things can be recycled at your local recycling centre, like batteries, ink cartridges and clothes</li>
          <Flexy><li>Use kitchen waste to make compost for the garden</li></Flexy>
          </FactList>
          </BoxMessage>
        </MessageBox>

      <MessageBox primary>
        <BoxMessage>Recycling means we can make new products cheaper. It also means that we cause fewer greenhouse gasses, and millions of tonnes less waste to landfill. By recycling, you’re not just making a difference for future generations, but doing something that is important right now.

        </BoxMessage>
      </MessageBox>





        {/* {children} */}
        <Button primary handleClick={handleClose} label="Close"></Button>

      </section>
    </FunFactsBox>
  );
};

export default FunFactsModal;
