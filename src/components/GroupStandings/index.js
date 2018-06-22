import React, { Component } from 'react'

import withTeams from '../../hoc/withTeams'
import withGroupStandings from '../../hoc/withGroupStandings'

import Group from './Group'
import './index.css'

class GroupStandings extends Component {
  componentDidMount() {
    this.props.getTeamsRoutine()
    this.props.getGroupStandingsRoutine()
  }

  render() {
    const {
      groupStandings,
      teams
    } = this.props

    const teamsById = teams.data.reduce((accumulator, team) => {
      return {
        ...accumulator,
        [team._id]: team
      }
    }, {})

    return (
      <div>
        {groupStandings.data.length > 0 && teams.data.length > 0 &&
          groupStandings.data.map(groupStanding =>
            <div key={groupStanding.group} className="group-wrap">
              <h2>{groupStanding.group}</h2>
              <Group
                group={groupStanding}
                teamsById={teamsById}
              />
            </div>
          )
        }
      </div>
    )
  }
}

export default withTeams(
  withGroupStandings(GroupStandings)
)
