import React from 'react'

const Issue = ({ issue }) => (
  <div>
    <p>{ Object.keys(issue).toString() }</p>
    <p>{ issue.title }</p>
    <p>{ issue.repository }</p>
    <a href={issue.html_url}>{ issue.html_url }</a>
    <p>{ issue.updatedAt.toString() }</p>
    <hr />
  </div>
)

Issue.propTypes = {
  issue: React.PropTypes.object
}

export default Issue
