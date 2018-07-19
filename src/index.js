//import _ from 'lodash';
//import print from './print';
//import './style.css';
import { cube } from './meth.js';

const content = ()=>{

  let ele = document.createElement('div');
  //let btn = document.createElement('button');

  // ele.innerHTML = _.join(['aaa','ccc']);
  // btn.innerText = 'click';
  // btn.onclick = print;
  // //print();
  // ele.appendChild(btn);

  ele.innerHTML = [
    '5 cube is:',
    cube(5)
  ].join('')

  return ele;

}

document.body.appendChild(content());


//  if (module.hot) {
//    module.hot.accept('./print.js', function() {
//      console.log('Accepting the updated print module!');
//      print();
//    })
//  }