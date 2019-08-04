import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class Chart extends Component {

    render() {
        return (
            <div className="chart">
              
              <Sparklines data={this.props.data}>
                  <SparklinesLine style={{strokeWitth:3 , stroke: this.props.color} }/>
                  </Sparklines>
            </div>
        )
                       
      }
}

export default Chart;