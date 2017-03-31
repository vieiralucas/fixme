import React from 'react'

const IssueItem = ({ issue }) => {
  const {
    createdAt,
    updatedAt,
    htmlUrl: href,
    title,
    user
  } = issue;

  return (
    <li className='issue-item'>
      <strong><a href={href}>{ title }</a></strong>
      <div>
        <small className='issue-item-small'>
          opened in { createdAt.toString() } by { user.login }
        </small>
        <br />
        <small className='issue-item-small'>
          last updated at { updatedAt.toString() }
        </small>
      </div>
    </li>
  )
}

IssueItem.propTypes = {
  issue: React.PropTypes.object
}

export default IssueItem
