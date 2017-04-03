import React from 'react'
import moment from 'moment'

const liStyle = {
  listStyleType: 'none'
}

const imgStyle = {
  float: 'left',
  height: '36px'
}

const divStyle = {
  marginLeft: '45px'
}

const anchorStyle = {
  color: 'rgba(0, 0, 0, 0.870588)'
}

const h3Style = {
  margin: 0
}

const IssueItem = ({ issue }) => {
  const {
    updatedAt,
    htmlUrl: href,
    title,
    user
  } = issue;

  const repo = href.split('/').splice(3, 2).join('/')
  const primaryText = (
    <a href={href} target='_blank' style={anchorStyle}>
      {`${repo} - ${title}`}
    </a>
  )
  const secondaryText = moment(updatedAt).fromNow()

  return (
    <li style={liStyle}>
      <img src={user.avatarUrl} alt='user avatar' style={imgStyle} />
      <div style={divStyle}>
        <h3 style={h3Style}>{primaryText}</h3>
        <small>{secondaryText}</small>
      </div>
    </li>
  )
}

IssueItem.propTypes = {
  issue: React.PropTypes.object
}

export default IssueItem
