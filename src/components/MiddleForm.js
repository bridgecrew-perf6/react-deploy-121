import 'bootstrap/dist/css/bootstrap.min.css';

import {UncontrolledCarousel} from 'reactstrap'


export default function  MiddleForm(props){
    return (
        <UncontrolledCarousel
        items={[
          {
            caption: props.caption1,
            key: 1,
            src: props.one
          },
          {
            caption: props.caption2,
            key: 2,
            src: props.two
          },
          {
            caption: props.caption3,
            key: 3,
            src: props.three
          },
          {
            caption: props.caption4,
            key: 4,
            src: props.four
          }
         
        ]}
       />
    )
}