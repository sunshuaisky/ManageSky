import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.css'

const Loading = ({ spinning = true, fullScreen }) => {
  return (
    <div
      className={classNames(styles.loading, {
        [styles.hidden]: !spinning,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  )
}

Loading.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
}

export default Loading