import './style.css';
import _ from 'lodash';
import cube from './meth.js';

const content = ()=>{

  let ele = document.createElement('div');

  ele.innerHTML = _.join(
    [
      '5 cube is:',
       cube(7)
    ]
  );

  return ele;


  
}

document.body.appendChild(content());

//  if (module.hot) {
//    module.hot.accept('./print.js', function() {
//      console.log('Accepting the updated print module!');
//      print();
//    })
//  }