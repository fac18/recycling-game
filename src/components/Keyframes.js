import { keyframes } from 'styled-components';

const spinscale = keyframes`
    0% {
      transform: 
      rotate(0deg) 
      scale(0.9)
    }
    35% {
        transform: 
        rotate(3deg) 
        scale(0.84) 
    }
    70% {
        transform: 
        rotate(7deg) 
        scale(0.9)
    }
    100% {
        transform: 
        rotate(10deg) 
        scale(0.84) 
    }
`
const rotatey = keyframes`
    100% {
      transform: rotate(360deg);
    }
  `
// const translaterotate = keyframes`
//     0% {
//       transform: translate(20px, 10vmin) rotate(0deg);
//     }
//     20% {
//         transform: translate(40px, 10vmin) rotate(3deg);
//     }
//     40% {
//         transform: translate(60px, 10vmin)rotate(5deg);
//     }
//     60% {
//         transform: translate(0px, 10vmin)rotate(7deg) scale(0.7);
//     }
//     80% {
//         transform: rotate9deg) scale(1.0);
//     }
//     100% {
//         transform: rotate(11deg) scale(0.9);
//     }
// `
export { spinscale, rotatey };