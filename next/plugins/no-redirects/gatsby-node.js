exports.onPostBootstrap = ({ store, reporter }) => {
  const redirects = store.getState().redirects
  if (redirects.length !== 0) {
    reporter.panic(
      'Redirects are not currently supported by the deployment process and can not be used'
    )
  }
}
