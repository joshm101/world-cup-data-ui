import React from 'react'
import { Table } from 'antd'

import './index.css'

const Group = ({ group, teamsById }) => {
  const { standings } = group
  const columns = [
    {
      title: 'Team',
      dataIndex: 'team',
      render: (teamId, record, index) => (
        <span className="group-standing-team">
          <span
            className="group-standing-team-rank"
          >
            {index + 1}
          </span>
          <img
            className="group-standing-team-logo"
            src={teamsById[record.team].logo}
          />
          <span
            className="group-standing-team-name"
          >
            {teamsById[record.team].name}
          </span>
        </span>
      ),
      key: 'team'
    },
    {
      title: 'MP',
      dataIndex: 'matchesPlayed',
      render: (_, record, index) => (
        <span>
          {record.wins + record.draws + record.losses}
        </span>
      ),
      key: 'matchesPlayed'
    },
    {
      title: 'GF',
      dataIndex: 'goalsFor',
      key: 'goalsFor'
    },
    {
      title: 'GA',
      dataIndex: 'goalsAgainst',
      key: 'goalsAgainst'
    },
    {
      title: 'Pts',
      dataIndex: 'points',
      key: 'points'
    }
  ]

  return (
    <Table
      dataSource={standings}
      columns={columns}
      pagination={false}
      rowKey="team"
    />
  )
}

export default Group
