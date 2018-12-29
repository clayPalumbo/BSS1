import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import sox from './../../img/Sox.png';
import styles from './../Utils/Utils'


const BoxScore = () => (
<div className="border1">
 

  <h3 className="pt-3 pl-4"><img className="img2" src={sox} alt={`Sox Profile Pic`}/> Boston Red Socks</h3>
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
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>

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
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>

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
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
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
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
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
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
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
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>

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
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
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
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </div>

)

export default BoxScore