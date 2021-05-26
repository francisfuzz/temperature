import PropTypes from 'prop-types'
import React from 'react'

class BoilingVerdict extends React.Component {
  render () {
    if (this.props.celsius >= 100) {
      return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
  }
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired
}

export default BoilingVerdict
