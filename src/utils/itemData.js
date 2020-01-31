import GlassBottle from "../images/wine-bottle.svg";
import AppleCore from "../images/apple-core.svg";
import CardboardBox from "../images/cardboard-box.svg";
import CoffeeCup from "../images/coffee-cup2.svg";
import DrinksCan from "../images/drinks-can.svg";
import MilkCarton from "../images/milk-carton.svg";
import Newspaper from "../images/newspaper.svg";
import Papers from "../images/paper.svg";
import PlasticBag from "../images/plastic-bag.svg";
import PlasticBottle from "../images/plastic-bottle.svg";
import Shirt from "../images/shirt.svg";
import SweetWrapper from "../images/sweet-wrapper.svg";
import TeaBag from "../images/tea-bag.svg";
import TinCan from "../images/tin-can.svg";

const items = [
  {
    name: "Glass Bottles",
    src: GlassBottle,
    bin: "recycling",
    fact: "Families use around 330 glass bottles and jars every year"
  },
  {
    name: "Coffee Cups",
    src: CoffeeCup,
    bin: "general waste",
    fact: "You can sometimes take coffee cups back to the shop for recycling!"
  },
  {
    name: "Newspapers",
    src: Newspaper,
    bin: "recycling",
    fact: "It takes one tree to make 230 newspapers or magazines!"
  },
  {
    name: "Tea Bags",
    src: TeaBag,
    bin: "food compost",
    fact: "Tea bags can be turned into compost for your plants!"
  },
  {
    name: "Apple Cores",
    src: AppleCore,
    bin: "food compost",
    fact: "Uneaten food items can be used to make food for animals!"
  },
  {
    name: "Cardboard Boxes",
    src: CardboardBox,
    bin: "recycling",
    fact: "Flatten cardboard boxes before they go in the bin!"
  },
  {
    name: "Drinks Cans",
    src: DrinksCan,
    bin: "recycling",
    fact:
      "A recycled drinks can could be back in the shops as a new drink within 60 days!"
  },
  {
    name: "Milk Cartons",
    src: MilkCarton,
    bin: "recycling",
    fact:
      "Drinks cartons can usually be recyled, but not always...see if you can find the rules for your area!"
  },
  {
    name: "Papers",
    src: Papers,
    bin: "recycling",
    fact: "We recycle around 80% of paper in the UK!"
  },
  {
    name: "Plastic Bags",
    src: PlasticBag,
    bin: "general waste",
    fact: "If you get a reusable bag you won't need so many plastic ones!"
  },
  {
    name: "Plastic Bottles",
    src: PlasticBottle,
    bin: "recycling",
    fact: "It can take 500 years for plastic to fully decompose!"
  },
  {
    name: "Clothes",
    src: Shirt,
    bin: "general waste",
    fact:
      "You might not be able to recycle clothes at home, but you can probably take them to a recycling center!"
  },
  {
    name: "Sweet Wrappers",
    src: SweetWrapper,
    bin: "general waste",
    fact:
      "Every year, we throw away enough plastic to circle the world 5 times!"
  },
  {
    name: "Tin Cans",
    src: TinCan,
    bin: "recycling",
    fact: "Canned food can last for two years!"
  }
];

export default items;
