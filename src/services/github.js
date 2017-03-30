import Octokat from 'octokat'

let octo

const authenticate = token => {
  octo = new Octokat({ token })
  window.octo = octo
}

const issues = () => octo.me.fetch()
  .then(me => me.subscriptions.fetchAll()) // get all watched repos
  .then(subscriptions => subscriptions.filter(s => s.openIssues > 0)) // filter out repos without issues open
  .then(subscriptions => subscriptions.map(s => s.issues.fetchAll())) // fetch all issues
  .then(issuesOfIssuesPromises => Promise.all(issuesOfIssuesPromises)) // wait for issues
  .then(issuesOfIssues => issuesOfIssues.reduce((issues, i) => issues.concat(i), [])) // flatten array

export default {
  authenticate,
  issues
}
