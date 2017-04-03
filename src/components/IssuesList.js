import React from 'react'

import IssueItem from './IssueItem'

const IssuesList = ({ issues }) => {
  const ordered = issues
    .sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime());

  const renderIssues = issues => issues.map((issue, i) => (
    <div key={i}>
      <IssueItem issue={issue} />
      <hr />
    </div>
  ))

  return (
    <ul>
      { renderIssues(ordered) }
    </ul>
  )
}

IssuesList.propTypes = {
  issues: React.PropTypes.array
}

export default IssuesList
