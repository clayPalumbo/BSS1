import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import blue from './../../img/bluejays.png';

const BaseBallRight = () => (
<div> 

<h3 className="pt-3 pl-4"><img className="img2" src={blue} alt={`Blue Profile Pic`}/> Toronto Blue Jays</h3>
<Table singleLine>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>BATTERS <span className="space">********</span></Table.HeaderCell>
      <Table.HeaderCell>AB</Table.HeaderCell>
      <Table.HeaderCell>R</Table.HeaderCell>
      <Table.HeaderCell>H</Table.HeaderCell>
      <Table.HeaderCell>RBI</Table.HeaderCell>
      <Table.HeaderCell>BB</Table.HeaderCell>
      <Table.HeaderCell>SO</Table.HeaderCell>
      <Table.HeaderCell>LOB</Table.HeaderCell>
      <Table.HeaderCell>AVG</Table.HeaderCell>

    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.Cell>
          <Header.Content>
            M. Breda
          </Header.Content>
      </Table.Cell>
      <Table.Cell>3</Table.Cell>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>.266</Table.Cell>

    </Table.Row>
    <Table.Row>
      <Table.Cell>
          <Header.Content>
            S. Matthew
          </Header.Content>
      </Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>.287</Table.Cell>

    </Table.Row>
    <Table.Row>
      <Table.Cell>
          <Header.Content>
            B. Lindsay
          </Header.Content>
      </Table.Cell>
      <Table.Cell>12</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>.320</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>
          <Header.Content className="tableFont">
            J. Mark
          </Header.Content>
      </Table.Cell>
      <Table.Cell>11</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>.227</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>
          <Header.Content>
            C. Lena
          </Header.Content>
      </Table.Cell>
      <Table.Cell>3</Table.Cell>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>.442</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>
          <Header.Content>
            K. Matthew
          </Header.Content>
      </Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>.412</Table.Cell>

    </Table.Row>
    <Table.Row>
      <Table.Cell>
          <Header.Content>
            A. Lindsay
          </Header.Content>
      </Table.Cell>
      <Table.Cell>12</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>.335</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>
          <Header.Content>
            D. Mark
          </Header.Content>
      </Table.Cell>
      <Table.Cell>11</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>15</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>.334</Table.Cell>
    </Table.Row>
    <Table.Row className="font-weight-bold">
      <Table.Cell>Totals</Table.Cell>
      <Table.Cell>35</Table.Cell>
      <Table.Cell>5</Table.Cell>
      <Table.Cell>7</Table.Cell>
      <Table.Cell>8</Table.Cell>
      <Table.Cell>4</Table.Cell>
      <Table.Cell>8</Table.Cell>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>.334</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
</div>
  )

  export default BaseBallRight