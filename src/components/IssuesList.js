import React from 'react'

import IssueItem from './IssueItem'

const IssuesList = ({ issues }) => {
  const ordered = issues
    .sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime());
  return (
    <ul>
      { ordered.map((issue, i) =>
        <IssueItem key={i} issue={issue} />)
      }
    </ul>
  )
}

IssuesList.propTypes = {
  issues: React.PropTypes.array
}

export default IssuesList
