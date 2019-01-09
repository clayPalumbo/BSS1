import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import nj from './../../img/nj.png';

const HockeyRight = () => (
<div className="border1">
<h3 className="pt-3 pl-4"><img className="img2" src={nj} alt={`Sox Profile Pic`}/> New Jersey Devils</h3>
<Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>SKATERS <span className="space">********</span></Table.HeaderCell>
        <Table.HeaderCell>G</Table.HeaderCell>
        <Table.HeaderCell>A</Table.HeaderCell>
        <Table.HeaderCell>S</Table.HeaderCell>
        <Table.HeaderCell>BIM</Table.HeaderCell>
        <Table.HeaderCell>BS</Table.HeaderCell>
        <Table.HeaderCell>GA</Table.HeaderCell>
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
      </Table.Row>
    </Table.Body>
  </Table>
  </div>
  )

  export default HockeyRight