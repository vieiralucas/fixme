import React from 'react'

import Issue from './Issue'

const IssuesList = ({ issues }) => {
  const ordered = issues
    .sort((a, b) => a.updatedAt.getTime() > b.updatedAt.getTime);
  return (
    <ul>
      { ordered.map((issue, i) =>
        <li><Issue key={i} issue={issue} /></li>)
      }
    </ul>
  )
}

IssuesList.propTypes = {
  issues: React.PropTypes.array
}

export default IssuesList
