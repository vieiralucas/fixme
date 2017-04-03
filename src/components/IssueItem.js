import React from 'react'
import moment from 'moment'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

const anchorStyle = {
  color: 'rgba(0, 0, 0, 0.870588)'
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
  const avatar = <Avatar src={user.avatarUrl} />

  return (
    <ListItem primaryText={primaryText}
      secondaryText={secondaryText}
      leftAvatar={avatar} />
  )
}

IssueItem.propTypes = {
  issue: React.PropTypes.object
}

export default IssueItem
