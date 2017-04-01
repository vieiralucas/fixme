import React from 'react'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import IssueItem from './IssueItem'

const IssuesList = ({ issues }) => {
  const ordered = issues
    .sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime());

  const renderIssues = issues => issues.map((issue, i) => (
    <div key={i}>
      <IssueItem issue={issue} />
      <Divider inset={true} />
    </div>
  ))

  return (
    <List>
      { renderIssues(ordered) }
    </List>
  )
}

IssuesList.propTypes = {
  issues: React.PropTypes.array
}

export default IssuesList
