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
import Straw from "../images/straw.png";
import Can from "../images/can.png";
import Apple from "../images/apple.png";
import MilkBottle from "../images/milk_bottle.png";
import NewsPaper from "../images/newspaper.png";
import WaterBottle from "../images/water_bottle.png";
import PopsicleStick from "../images/popsicle_stick.png";
import PizzaBox from "../images/pizza_box.png";
import GreasyPizzaBox from "../images/greasy_pizza_box.png";
import ToiletRoll from "../images/toilet_roll.png";
import PlasticBagNew from "../images/plastic_bag.png";
import Letter from "../images/letter.png";
import Ketchup from "../images/ketchup.png";
import IceCreamTubCardboard from "../images/iceCreamTubCardboard.png";
import IceCreamTubPlastic from "../images/iceCreamTubPlastic.png";
import GlassBottleNew from "../images/glass_bottle.png";
import Chips from "../images/chips.png";
import CoffeeCupNew from "../images/coffeeCup.png";
import CoffeeCupOnlyCup from "../images/coffeeCupOnlyCup.png";
import CoffeeCupOnlyLid from "../images/coffeeCupOnlyLid.png";

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
      "You might not be able to recycle clothes at home, but you can probably take them to a recycling center such as Moms Store Nepal or Sukhawati Store Sukhawati Store Foundation!"
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
  },
  {
    name: "Straw",
    src: Straw,
    bin: "general waste",
    fact: "Straws are made out of plastic, but they are too small for recycling facilities."
  },
  {
    name: "Aluminium Cans",
    src: Can,
    bin: "recycling",
    fact: "Aluminium cans are 100% recyclable."
  },
  {
    name: "Apple",
    src: Apple,
    bin: "food compost",
    fact: "Food waste cannot be recycled. To reduce your food waste, build a compost bin!"
  },
  {
    name: "Milk Bottle",
    src: MilkBottle,
    bin: "recycling",
    fact: "If your milk bottle is made out of plastic, put it in the recycling bin."
  },
  {
    name: "Newspaper",
    src: NewsPaper,
    bin: "recycling",
    fact: "Uncontaminated paper always goes into the recycling bin."
  },
  {
    name: "Water Bottle",
    src: WaterBottle,
    bin: "recycling",
    fact: "If your water bottle is made out of plastic, always put it in the recycling bin."
  },
  {
    name: "Popsicle Stick",
    src: PopsicleStick,
    bin: "general waste",
    fact: "Popsicle sticks are already made out of recycled materials, so it can’t be recycled again!"
  },
  {
    name: "Pizza Box",
    src: PizzaBox,
    bin: "recycling",
    fact: "Pizza boxes are 100% recyclable if they’re not contaminated."
  },
  {
    name: "Greasy Pizza Box",
    src: GreasyPizzaBox,
    bin: "general waste",
    fact: "Greasy and contaminated items cannot go into the recycling bin!"
  },
  {
    name: "Toilet Roll",
    src: ToiletRoll,
    bin: "recycling",
    fact: "Toilet rolls are made out of cardboard which is 100% recyclable!"
  },
  {
    name: "Plastic Bag",
    src: PlasticBagNew,
    bin: "general waste",
    fact: "Plastic bags are no good for recycling bins, but you can drop them off in a REDcycle bin if there is one near you!"
  },
  {
    name: "Letter",
    src: Letter,
    bin: "general waste",
    fact: "If your letter still has the thin plastic film over it, it cannot be placed in the recycling bin."
  },
  {
    name: "Ketchup",
    src: Ketchup,
    bin: "recycling",
    fact: "Ketchup bottles are 100% recyclable."
  },
  {
    name: "Ice Cream Tub Cardboard",
    src: IceCreamTubCardboard,
    bin: "general waste",
    fact: "Cardboard ice-cream containers are contaminated and cannot be recycled."
  },
  {
    name: "Ice Cream Tub Plastic",
    src: IceCreamTubPlastic,
    bin: "recycling",
    fact: "Plastic ice-cream containers can be recycled, but make sure to rinse them before you put it into the recycling bin!"
  },
  {
    name: "Glass Bottle",
    src: GlassBottleNew,
    bin: "recycling",
    fact: "Glass bottles are 100% recyclable."
  },
  {
    name: "Chips",
    src: Chips,
    bin: "general waste",
    fact: "Snack packaging is made out of soft plastic and cannot be recycled, but you can drop them off in a REDcycle bin if there is one near you!"
  },
  {
    name: "Coffee Cup",
    src: CoffeeCupNew,
    bin: "general waste",
    fact: "Takeaway coffee cups cannot be put into the recycling bin as it is! Some parts are recyclable whilst other parts are not!"
  },
  {
    name: "Coffee Cup Only",
    src: CoffeeCupOnlyCup,
    bin: "general waste",
    fact: "The cups of coffee cups usually have a layer of wax in it which is not recyclable!"
  },
  {
    name: "Coffee Cup Led Only",
    src: CoffeeCupOnlyLid,
    bin: "recycling",
    fact: "The lids of takeaway coffee cups are recyclable alone."
  },
];

export default items;
