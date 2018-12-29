import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { className } from 'postcss-selector-parser';
import sox from './../../img/Sox.png';
import blue from './../../img/bluejays.png';


const ScoreHeader = () => (
  <Grid>

    <Grid.Row columns={7}>

      <Grid.Column>
      <h3 className="pt-2 mb-0 text-right"> Boston Red Socks</h3><div className="record text-right pt-0">(45-34)</div>
      </Grid.Column>
      <Grid.Column>
      <img className="img3" src={sox} alt={`Sox Profile Pic`}/>
      </Grid.Column>
      <Grid.Column>
        <h5 className="pt-2 text-right"> Hello</h5>
      </Grid.Column>
      <Grid.Column>
        Hello
      </Grid.Column>
      <Grid.Column>
      <img className="img3" src={blue} alt="sox" />
      </Grid.Column>
      <Grid.Column>
      <h3 className="pt-2 mb-0 text-left">Toronto Blue Jays</h3><div className="record text-left pt-0">(55-24)</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ScoreHeader